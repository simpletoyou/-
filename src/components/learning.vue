<template>
  <div class="learn-container">
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
  @line: 30px;
  @color: #FFF;
  @bg: #d9d9d9;
  @font: 16px;

  .learn-container {
    line-height: @line;
    position: relative;

    li {
      color: @color;
      display: inline-block;
      color: #FFF;
      text-decoration: none;
      font-size: @font;
      margin-right: 30px;
      cursor: pointer;
    }



    .banner {
      filter: brightness(0.6);
      width: 100%;
      background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg) center no-repeat;
      background-size: cover
    }
  }

</style>
