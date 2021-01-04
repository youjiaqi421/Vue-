<template>
  <div class="navigation">
    <div class="search">
      <img src="../assets/logo/soushuo.svg" alt />
      <input type="text" placeholder="搜索音乐" />
    </div>
    <div class="login">
      <img class="round" :src='avatarUrl ? avatarUrl : null'>
      <div class="online" @click="login" v-if="nickname == ''">点击登录</div>
      <div class="online" v-else>{{nickname}}</div>
    </div>
    <div v-show="appear">
      <div class="cancel">
        <div class="cancel_main">
          <div class="cancel_img" @click="loginCancel">
             <img src="../assets/logo/cha.svg" />
          </div>
          <div class="back_img" @click="login" >
            <img src="../assets/logo/huitui.svg" />
          </div>
          <div class="cancel_logo" v-show = "logo_cancel">
            <img src="../assets/logo/logo.jpg" />
          </div>
            <div class="login_main">
            <!-- 主页 -->
              <div class="Login_way" v-show="login_show">
              <div class="Login_email" @click="login_up">
                <span>登录</span>
              </div>
              <div class="Login_Phone" @click="resginCount">
                <span>注册</span>
              </div>
            </div>
            <!-- 登录 -->
                <div class="login_account" v-show="login_count">
                <el-form class="login_count" ref="formDate" :model="formDate" :rules="rules">
                <div class="login_account_img">
                <img src="../assets/logo/shouji.svg" />
                <el-form-item  prop="phone">
                  <el-input  v-model.trim="formDate.phone"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                <div class='login_account_img'>
                 <img src="../assets/logo/yuechi.svg" />               
                 <el-form-item prop="password">
                  <el-input type="password" v-model.trim="formDate.password"></el-input>
                </el-form-item>
               </div>
                </el-form>
                <button @click="submitForm('formDate')">登录</button>
                </div>
            <!-- 注册 -->
               <div class="login_account" v-show="resgin_count">
               <el-form class="login_count" ref="fromResgin" :model="fromResgin" :rules="rules">
                <div class="login_account_img">
                <img src="../assets/logo/zhanghao.svg" />
                <el-form-item  prop="nickname">
                  <el-input class="input_style" v-model.trim="fromResgin.nickname"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                <div class='login_account_img'>
                 <img src="../assets/logo/shouji.svg" />               
                 <el-form-item prop="phone">
                 <el-input class="input_style" v-model.trim="fromResgin.phone"></el-input>
                </el-form-item>
               </div>
                <div class="login_account_img">
                <img src="../assets/logo/yuechi.svg" />
                <el-form-item  prop="password">
                  <el-input class="input_style" type="password" v-model.trim="fromResgin.password"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                 <div class="login_account_img">
                <img src="../assets/logo/yanzhengma.svg" />
                <el-form-item  prop="captcha">
                  <el-input class="input_style" v-model.trim="fromResgin.captcha"  auto-complete="true"></el-input>
                </el-form-item>
                <div class="codeStyle"  @click="capCode" v-show ='captchaShow'>获取验证码</div> 
                <div class = "codeStyle" v-show ='!captchaShow'>{{timeShow}}S之后重新获取</div>
                </div>
               </el-form>
                 <button @click="ClickForm('fromResgin')" :disabled="submitDisabled">注册</button>  
              
             </div>
           </div>  
         </div>
      </div> 
    </div>     
  </div>
</template>

<script>
import "../assets/css/login.css";
 import { Message } from 'element-ui';
import { captchaPhone ,LoginUser,LoginUp} from "../until/Api.js"
import { validatePhone ,validatePsdReg,validateUserName,ID} from "../until/rules.js";
export default {
  name: "Navigation",
  data() {
    return {
      appear: false,
      login_show:true,
      login_count:false,
      resgin_count:false,
      logo_cancel:true,
      captchaShow:true, 
      submitDisabled:false,
      timeShow:'',
      nickname:'',
      avatarUrl:'',
      //登录信息表单内容
      formDate:{
         phone:'',
         password:''
      },
      //注册信息表单内容
      fromResgin:{
        nickname:'',
        phone:'',
        password:'',
        captcha:''
      },
      rules:{
        password:[
             {required: true, validator:validatePsdReg, trigger: 'blur'}
        ],
        nickname:[
            {required: true, validator:validateUserName, trigger: 'blur'}
        ],
        phone:[
            {required: true, validator:validatePhone, trigger: 'blur'}
        ],
        passcode:[
            {required: true, validator:validatePsdReg, trigger: 'blur'}
        ],
        captcha:[
            {required: true, validator:ID, trigger: 'blur'}
        ]
      }
    };
  },
  components: {},
  methods: {
    // 出现登录主界面
    login() {
      this.appear = true;
      this.login_show = true;
      this.login_count = false;
      this.resgin_count = false;
      this.logo_cancel = true
    },
    // 取消登录界面
    loginCancel() {
      this.appear = !this.appear;
    },
    // 展示登录界面
    login_up() {
      this.login_show=!this.login_show,
      this.login_count=!this.login_count
    }, 
    // 注册界面
    resginCount(){
      this.login_show = false;
      this.logo_cancel = false;
      this.resgin_count = !this.resgin_count
    },
    // 登录提交
   async submitForm(formDate){ 
       let {phone,password} = this.formDate
       this.$refs[formDate].validate((valid)=>{
            if (valid) {
                return true
             }else {
               return false;
          }
      }) 
      let rsponse =  await LoginUp(phone,password)
      if  (rsponse.data.code === 200){
            Message ({
                     message: "登录成功",
                     center: true,
                })
            this.appear = false;
            this.nickname = rsponse.data.profile.nickname
            this.avatarUrl= rsponse.data.profile.avatarUrl
      }     
     },
     //注册提交
    ClickForm(fromResgin){  
      let {phone,captcha,password,nickname}  = this.fromResgin
      // captchaVerify(phone,captcha)
      this.$refs[fromResgin].validate((valid)=>{
            if (valid) {
               alert('提交成功');
             }else {
               return false;
          }
       }),
       LoginUser(phone,captcha,password,nickname).then((res) => {
            console.log(res,'3333')
           if (res.data.code === 200) {
                Message({
                    message: "注册成功",
                    center: true,
                })
                this.submitDisabled = true
                this.appear = true;
                this.login_show = true;
                this.login_count = false;
                this.resgin_count = false;
                this.logo_cancel = true
            }else{
                this.submitDisabled = false
            }
       })
    },
    //倒计时
    capCode(){
      let phone = this.fromResgin.phone
      captchaPhone(phone)
      let time = 60;
      this.timeShow = time;
      this.captchaShow = false;
      if (this.timeShow <= 0) return
        const timer = setInterval(() => {
          if (this.timeShow === 0) {
            clearInterval(timer);
            this.captchaShow = true;
            } else {
            this.timeShow--;
          }
        }, 1000);
    }
  },
    

}
</script>

<style scoped>
::v-deep .el-input__inner{
  padding: 0px;
  width: 150px;
  height:30px;
  outline-width: 0px;
  background-color:hsl(219, 76%, 81%,0.1)
}

</style>