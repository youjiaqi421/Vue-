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
          <div class="cancel_logo">
            <img src="../assets/logo/logo.jpg" />
          </div>
            <div class="login_main">
            <!-- 主页 -->
              <div class="Login_way" v-show="login_show">
              <div class="Login_email" @click="login_up">
                <span>登录</span>
              </div>
              <div class="Login_Phone" @click="resgin_down">
                <span>注册</span>
              </div>
            </div>
            <!-- 登录 -->
            <div class="login_account" v-show="login_count">
               <el-form class="login_count" ref="formDate" :model="formDate" :rules="rules">
                <div class="login_account_img">
                <img src="../assets/logo/shouji.svg" />
                <el-form-item  prop="userName">
                  <el-input class="input_style" v-model="formDate.userName"  auto-complete="true"></el-input>
                </el-form-item>
                </div>
                <div class='login_account_img'>
                 <img src="../assets/logo/yuechi.svg" />               
                 <el-form-item prop="passWord">
                  <el-input class="input_style" v-model.trim="formDate.passWord"></el-input>
                </el-form-item>
              </div>
               </el-form>
              <button @click="submitForm('formDate')">登录</button>
            </div>



           </div>  
         </div>
      </div> 
    </div>     
  </div>
</template>

<script>
import "../assets/css/login.css";
 import { validatePhone ,validatePsdReg} from "../until/rules.js";
export default {
  name: "Navigation",
  data() {
    return {
      appear: false,
      login_show:true,
      login_count:false,

      //登录信息表单内容
     formDate:{
         userName:'',
         passWord:''
      },
      rules:{
        userName:[
            {required: true, validator:validatePhone , trigger: 'blur' },
          ],
        passWord:[
             {required: true, validator:validatePsdReg, trigger: 'blur'}
        ]
      }
    };
  },
  components: {},
  methods: {
    // 出现登录主界面
    login() {
      console.log('展示')
      this.appear = true;
      this.login_show = true;
      this.login_count = false;
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
    resgin_down(){
      console.log('注册')
    },
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
    
  },

    
    
    
    /*
     * 验证码
     */
    // captcha() {
    //   let time = 5;
    //   this.timeshow = time;
    //   this.Captcha_show = false;
    //   if (this.timeshow <= 0) return
    //   const timer = setInterval(() => {
    //       if (this.timeshow === 0) {
    //         clearInterval(timer);
    //         this.Captcha_show = true;
    //       } else {
    //         this.timeshow--;
    //       }
    //     }, 1000);
    //   }
    
    /*
     * 登录：提价登录信息内容
     */
    // submitForm(){
    //   this.$refs['ruleForm'].validate(valid => {
    //     if(valid) {
    //       //请求，接口连接
    //       console.log('success')
    //     } else {
    //       this.$message.error('表单填写不符合规则，请核实！')
    //     }
    //   })
    // }
  
};
</script>

<style scoped>
::v-deep .el-input__inner{
  padding: 0px;
  width: 227px;
  height:33px;
  outline-width: 0px;
  background-color:hsl(219, 76%, 81%,0.1)
  
}
</style>