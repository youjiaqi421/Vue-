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
                              <div class="Login_email" @click="Email" >
                                    <img src="../assets/logo/login-Email.svg" alt="">
                              </div>
                              <div class="Login_Phone" @click="Phone">
                                    <img src="../assets/logo/Phone.svg" alt="">
                              </div>
                            </div>

                            <!-- 手机 -->
                            <div v-show="Phone_appear">
                            <div class='login_image'>
                              <img src="../assets/logo/zhanghao.svg" alt="">
                              <input type="text" >
                            </div>
                            <div class='login_image'>
                               <img src="../assets/logo/yuechi.svg" alt="">
                               <input type="password" >
                            </div> 
                            <div class='login_footer'>
                              <button>注册</button>
                              <button>登录</button> 
                            </div>
                            </div>
                            <!-- 邮箱 -->
                            <div v-show="Email_appear">
                            <div class='login_image'>
                              <img src="../assets/logo/zhanghao.svg" alt="">
                              <input type="text" >
                            </div>
                            <div class='login_image'>
                               <img src="../assets/logo/yuechi.svg" alt="">
                               <input type="password" >
                            </div> 
                            <div class='login_footer'>
                              <button>注册</button>
                              <button>登录</button> 
                            </div>
                            </div>
                       </div>
                </div>        
                </div> 
             </div>
             
  </div>
</template>

<script>
import '../assets/css/login.css'
export default {
     name:'Navigation',
     data(){
       return{
         appear:false,
         login_appear:true,
         Phone_appear:false,
         Email_appear:false,
        
       }
     },
      components:{
       
      },
     methods:{
       /**
        *  
        */
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
       }

     }
}
</script>

<style>
   .Login_way{
      display: flex;
      width: 100%;
      justify-content: space-around;
   }
   .Login_email{
     width: 50px;
     height: 50px;
     background-image:url(../assets/logo/login-Email.svg);
     background-repeat: no-repeat;
     background-size:50px 50px ;
   }
   .Login_Phone{
     width: 50px;
     height: 50px;
     background-image:url(../assets/logo/Phone.svg);
     background-repeat: no-repeat;
     background-size:50px 50px ;
   }
    
</style>