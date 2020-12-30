<template>
  <div class="navigation">
    <div class="search">
      <img src="../assets/logo/soushuo.svg" alt />
      <input type="text" placeholder="搜索音乐" />
    </div>
    <div class="login">
      <div class="round"></div>
      <div class="online" @click="login">点击登录</div>
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
                <el-form-item  prop="userName">
                  <el-input  v-model.trim="formDate.userName"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                <div class='login_account_img'>
                 <img src="../assets/logo/yuechi.svg" />               
                 <el-form-item prop="passWord">
                  <el-input type="password" v-model.trim="formDate.passWord"></el-input>
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
                <el-form-item  prop="Name">
                  <el-input class="input_style" v-model.trim="fromResgin.Name"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                <div class='login_account_img'>
                 <img src="../assets/logo/shouji.svg" />               
                 <el-form-item prop="Phone">
                 <el-input class="input_style" v-model.trim="fromResgin.Phone"></el-input>
                </el-form-item>
               </div>
                <div class="login_account_img">
                <img src="../assets/logo/yuechi.svg" />
                <el-form-item  prop="passcode">
                  <el-input class="input_style" type="password" v-model.trim="fromResgin.passcode"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                 <div class="login_account_img">
                <img src="../assets/logo/yanzhengma.svg" />
                <el-form-item  prop="code">
                  <el-input class="input_style" v-model.trim="fromResgin.code"  auto-complete="true"></el-input>
                </el-form-item>
                <div class="codeStyle"  @click="capCode" v-show ='captchaShow'>获取验证码</div> 
                <div class = "codeStyle" v-show ='!captchaShow'>{{timeShow}}S之后重新获取</div>
                </div>
               </el-form>
                 <button @click="ClickForm('fromResgin')">注册</button>  
              
             </div>
           </div>  
         </div>
      </div> 
    </div>     
  </div>
</template>

<script>
import "../assets/css/login.css";
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
      timeShow:'',
      //登录信息表单内容
      formDate:{
         userName:'',
         passWord:''
      },
      //注册信息表单内容
      fromResgin:{
        Name:'',
        Phone:'',
        passcode:'',
        code:''
      },
      rules:{
        userName:[
            {required: true, validator:validatePhone , trigger: 'blur' },
          ],
        passWord:[
             {required: true, validator:validatePsdReg, trigger: 'blur'}
        ],
        Name:[
            {required: true, validator:validateUserName, trigger: 'blur'}
        ],
        Phone:[
            {required: true, validator:validatePhone, trigger: 'blur'}
        ],
        passcode:[
            {required: true, validator:validatePsdReg, trigger: 'blur'}
        ],
        code:[
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
    submitForm(formDate){ 
      console.log(this.$refs[formDate].validate)  
      this.$refs[formDate].validate((valid)=>{
            console.log(valid)
            if (valid) {
                alert('submit!');
             }else {
               return false;
          }
      })  
     },
     //注册提交
    ClickForm(fromResgin){  
      this.$refs[fromResgin].validate((valid)=>{
            console.log(valid)
            if (valid) {
               alert('提交成功');
             }else {
               return false;
          }
       })  
     },
     /*
     * 验证码
     */
    capCode() {
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
  }
    
    
    
  
};
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