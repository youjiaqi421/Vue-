<template>
  <div class="navigation"> 
      <div class='search'>
          <img src="../assets/logo/soushuo.svg" alt="">
          <input type="text"  placeholder="搜索音乐">
      </div>
         <div class='round'></div>
         <div class='online' @click = "login">
              点击登录 
         </div>
                <div v-show="appear">
                <div class="cancel"> 
                <div class="cancel_main" >
                      <div class = "cancel_img" @click="cancelClick">
                         <img src="../assets/logo/cha.svg" >
                      </div>
                      <div class = "cancel_logo">
                         <img src="../assets/logo/logo.jpg" >
                      </div>  
                       <div class='login_main'>
                            <div class='login_image'>
                              <img src="../assets/logo/zhanghao.svg" alt="">
                              <input type="text" >
                            </div>
                            <div class='login_image'>
                               <img src="../assets/logo/yuechi.svg" alt="">
                               <input type="password">
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
</template>

<script>
// import login from '../views/login.vue'
export default {
     name:'Navigation',
     data(){
       return{
         appear:false,
       }
     },
      components:{
       
      },
     methods:{
       login(){
       this.appear = !this.appear
       },
       cancelClick(){
        this.appear = !this.appear
       }
     }
}
</script>

<style>
   .navigation{
      display:flex;
      align-items: center;
      width:100%; 
      height:100%;
   }
   .search{
     width: 200px;
     height: 33px;
     display:flex;
     align-items: center;
     margin-left:100px;
     border-radius:15px;
     background-color: #e1e1e1;
   }
   .search input{
     background-color: #e1e1e1;
     border:none;
     outline-width: 0px;
   }
   .search img{
     width: 20px;
     height: 20px;
     padding:5px
   }
    .round{
      width: 30px;
      height: 30px;
      background-color:hsl(271, 79%, 82%);
      border-radius:50%;
      margin-left: 250px;
    }
    .online{
      font-size: 0.7rem;
      font-weight: 400;
      margin-left:5px;
    }
    .cancel{
       width:100%;
       height:100%; 
       position:fixed;
       top: 0px;
       left: 0px;
       bottom: 0px;
       right: 0px;
       background:rgba(128, 184, 247, 0.2);
    }  
    .cancel_main{
       height:300px;
       width: 400px;
       position:absolute; 
       top: 0px;
       left: 0px;
       bottom: 0px;
       right: 0px;
       margin: auto;      
       z-index:-1; 
       overflow: hidden;   
       border-radius:0.3em;  
       box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset,0 .5em 1em rgba(0, 0, 0, 0.3);   
       text-shadow: 0 1px 1px hsla(0,0%,100%,.3);  
    }
    .cancel_main::before{
       content: '';   
       position: absolute;   
       top: 0; 
       right: 0; 
       bottom: 0; 
       left: 0;   
       margin: -30px;   
       z-index: -2;   
       -webkit-filter: blur(20px);   
       filter: blur(20px);   
    }
     .cancel_img img{
       position: absolute;
       top: 5px;
       right: 3px;
       width: 20px;
       height: 20px;
    }
    .cancel_logo{
      padding:45px;
      display: flex;
      justify-content: center;
    }
    .cancel_logo img{
      width: 80px;
      height: 80px;
      border-radius:50%;

    }
    .login_main{
      display: flex;
      align-items: center;
      flex-direction:column;
    }
     .login_main input{
       margin-top:5px;
       width: 180px;
       height: 30px;
       border:none;
       outline-width: 0px;
       background-color:#94d0f326;
     }
     .login_main img{
       height:20px;
       width: 20px;
       margin-right: 5px;
     }
     .login_image{
       display: flex;
       align-items: center;
     }
     .login_footer button{
        width:60px;
        height: 20px;
        font-size:15px;
        color:hsl(244, 100%, 74%);
        margin:10px 0px 0px 10px;
        border:none;
        outline-width: 0px;
        text-transform: uppercase;
        transition: 0.2s;
        background-size: 200% auto;
        background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
     }
     .login_footer button:hover{
       background-position: right center
     }
    
</style>