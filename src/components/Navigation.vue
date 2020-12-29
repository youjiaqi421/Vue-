<template>
  <div class="navigation"> 
      <div class='search'>
          <img src="../assets/logo/soushuo.svg" alt="">
          <input type="text"  placeholder="搜索音乐">
      </div>
      <div class="login">
        <div class='round'></div>
         <div class='online' @click = "login">
              点击登录 
         </div> 
      </div>
                <div v-show="appear">
                <div class="cancel"> 
                <div class="cancel_main" >
                      <div class = "cancel_img" @click="loginCancel">
                         <img src="../assets/logo/cha.svg" >
                      </div>
                      <div class = "cancel_logo">
                         <img src="../assets/logo/logo.jpg" >
                      </div>  
                       <div class='login_main' >
                            <div class = "Login_way" v-show="login_appear">
                              <div class="Login_email" @click="Phone" > 
                                 <span>登录</span>   
                              </div>
                              <div class="Login_Phone" @click="Email">
                                <span>注册</span>        
                              </div>
                            </div>

                            <!-- 登录 -->
                            <div v-show="Phone_appear">
                            <div class='login_image'>
                               <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
                              <img src="../assets/logo/shouji.svg" alt="">
                              <input type="text" v-model="username" @blur="checkout_username">
                            </div>
                            <div class='login_image'>
                               <img src="../assets/logo/yuechi.svg" alt="">
                               <input type="password" v-model="passWord" >
                            </div> 
                            <div class='login_footer'>
                              <button >登录</button> 
                            </div>
                            </div>


                            <!-- 注册 -->
                            <div class ='register' v-show="Email_appear">
                            <div class='login_image'>
                              <img src="../assets/logo/zhanghao.svg" alt="">
                              <input type="text"  v-model="username">
                            </div>
                             <div class='login_image'>
                               <img src="../assets/logo/shouji.svg" alt="">
                               <input type="text" v-model="PhoneCall">
                            </div> 
                            <div class='login_image'>
                               <img src="../assets/logo/yuechi.svg" alt="">
                               <input type="password" v-model="passWord" >
                            </div> 
                            <div class='login_image'>
                               <img src="../assets/logo/yanzhengma.svg" alt="">
                               <input type="text" > 
                               <div  class="Captcha" @click="captcha()" v-show ='Captcha_show'>
                                    获取验证码
                               </div> 
                                <div  class="Captcha"  v-show ='!Captcha_show'>
                                    {{timeshow}}S重新获取
                               </div> 
                            </div>
                            <div class='login_footer'>
                              <button @click = "register">注册</button>
                            </div>
                            </div>
                       </div>
                </div>        
                </div> 
             </div>
             
  </div>
</template>

<script>
import '../assets/css/login.css';
import  {validMobile}  from  '../until/rules.js'
export default {
     name:'Navigation',
     data(){
       return{
         appear:false,
         login_appear:true,
         Phone_appear:false,
         Email_appear:false,
         Captcha_show:true,
         timeshow:"",
         username:'',
         PhoneCall:'',
         passWord:'',
         Captcha:'',
         timer:null,
       }
     },
      components:{
       
      },
     methods:{
       login(){
       this.appear = !this.appear,
       this.login_appear=true,
       this.Phone_appear=false,
       this.Email_appear=false
       },

       loginCancel(){
        this.appear = !this.appear
       },
       Phone(){
          this.login_appear = !this.login_appear
          this.Phone_appear = !this.Phone_appear
       },
       Email(){
         this.login_appear = !this.login_appear
         this.Email_appear = !this.Email_appear
       },
       register(){
         console.log("1")
       },
       /*
        * 验证码
        */
       captcha(){
         let time  =  5
         this.timeshow = time
         this.Captcha_show = false
         if(this.timeshow > 0){
               const timer = setInterval(()=>{
                 if( this.timeshow == 0 ){
                     clearInterval(timer)
                     this.Captcha_show = true
                     }else{
                      this.timeshow--;
                     }     
              },1000)
          }
       },
       /*
        * 登录 
        */
       checkout_username(){
         if( this.username != '' && validMobile(this.username)){
                ('请填写正确的手机号码');
                return
          } 
       }
         
     }
}
</script>

<style>
   
</style>