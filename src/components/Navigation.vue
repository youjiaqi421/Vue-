<template>
  <div class="navigation"> 
      <div class='search'>
          <img src="../assets/logo/soushuo.svg" alt="">
          <input type="text"  placeholder="搜索音乐">
      </div>
         <div class='round'></div>
         <div class='online'  @click="login">
          点击登录 
         </div>
  </div>
</template>

<script>
export default {
     name:'Navigation',
     data(){
       return{}
     },
     methods:{
       login(){
          console.log(1)
         this.$router.push('Login')
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

</style>