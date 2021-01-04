<template>
<el-container>
    <el-aside style="width:200px;height:100vh;background-color:#f7f9f9;">
      <SideClolumn/>
    </el-aside>
    <el-container>
    <el-header style="width:100%;height:50px;">
      <Navigation/>
    </el-header>
   <el-main >
     <GoodsMain/>
   </el-main>
  </el-container>
</el-container>
</template>

<script>
import SideClolumn from './SideColumn'
import Navigation from  './Navigation'
import GoodsMain from   './GoodsMain'
export default {
  name: 'Home',
  data(){
    return{
    
    }
  },
  components: {
    SideClolumn,
     Navigation,
      GoodsMain
  }
}
</script>
<style  scoped>
   .el-header{
     padding:0px;
   }
   .el-main{
     padding:0px;
   }
</style>