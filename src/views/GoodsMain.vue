<template>
   
    <div>
       <el-menu  
       :default-active="activeIndex2"
       class="el-menu-demo"
       mode="horizontal"
       @select="handleSelect"
       background-color="#a99df9"
       text-color="#fff"
       active-text-color="#ffd04b">
              <el-menu-item index="1">个性推荐</el-menu-item>
              <el-menu-item index="2">歌单</el-menu-item>
              <el-menu-item index="3">主播电台</el-menu-item>
              <el-menu-item index="4">排行榜</el-menu-item>
              <el-menu-item index="5">歌手</el-menu-item>
              <el-menu-item index="6">最新音乐</el-menu-item>
    </el-menu>   
    </div>

</template>

<script>
export default {
   name:"GoodsMain",
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>