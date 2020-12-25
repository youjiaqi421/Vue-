<template>
   <div class="Side">
        <img class="image" 
        src="../assets/logo/tuzi.png"
        />
        <div class = "chart_color">
         给小兔子听音乐
        </div>
        <div class="side_online">
            <span>
              在线音乐
            </span>
          <div class="music_box">
            <img class="music_logo" 
            src="../assets/logo/music.png"
            /> 
            <span class='chart_music'>
              音乐馆
            </span>
          </div>

          <div class="music_box">
            <img class="music_logo" 
            src="../assets/logo/shipin.png"
            /> 
            <span class='chart_music'>
              视频
            </span>
            </div>

            <div class="music_box">
            <img class="music_logo" 
            src="../assets/logo/diantai-2.png"
            /> 
            <span class="chart_music">
              电台
            </span>
             </div>
         
           <div class="side_online_mymusic">
            <span>
              我的音乐
            </span>

            
            <div class="music_box">
            <img class="music_logo" 
            src="../assets/logo/xin.png"
            /> 
            <span class='chart_music'>
              我喜欢
            </span>
          </div>

          <div class="music_box">
            <img class="music_logo" 
            src="../assets/logo/diannao.png"
            /> 
            <span class='chart_music'>
              本地歌曲
            </span>
            </div>

             <div class="music_box">
             <img class="music_logo" 
             src="../assets/logo/xiazai_.png"
             /> 
             <span class="chart_music">
              下载歌曲
            </span>
            </div>

            <div class="music_box">
             <img class="music_logo" 
             src="../assets/logo/shijian.png"
             /> 
             <span class="chart_music">
              播放历史
            </span>
            </div>
             
             <div class="music_box">
             <img class="music_logo" 
             src="../assets/logo/yigou.png"
             /> 
             <span class="chart_music">
              已购音乐
            </span>
            </div>
        </div>  
         <div class="side_online_mymusic">
             <div>
                <span>
                创建的歌单
                </span>
                <div class="song_list">
                   <img src="../assets/logo/jiahao.png" />
                </div>
             
             </div>
             
 
        </div> 
        <div class="side_online_mymusic">
                 <span>
                收藏的歌单
                </span>
        </div>
        </div>

        
   </div>
</template>

<script>
import '../assets/css/sidecloumn.css'
export default {
    name: 'SideClolumn',
    data(){
      return{
          Isactive:false,
      }
    },
    methods:{
      changeColor(){
        this.Isactive = !this.Isactive
      }
    }

}
</script>

<style>

</style>
