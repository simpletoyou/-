<template>
  <div class="movie-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:'+winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
    </article>
  </div>
</template>

<script>
  // import axios
  import axios from "axios"
  import pageHeader from './pageHeader.vue'
  export default {
    data() {
      return {
        says: '',
        winHeight: '',
      }
    },
    components: {
      pageHeader
    },
    mounted() {
      this.winHeight = window.innerHeight + 'px'
      axios.get('https://v1.hitokoto.cn')
        .then(({
          data
        }) => {

        })
        .catch(console.error)
    }
  }
</script>

<style lang="less">
@import "../css/movie.less";
</style>
