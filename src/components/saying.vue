<template>
  <div class="saying-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:'+winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="main">
        <div class="bracket-left">『</div>
        <div class="text">{{says.hitokoto}}</div>
        <div class="bracket-right">』</div>
      </div>
      <div class="from">——&nbsp;{{says.from}}</div>

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
        says: {},
        winHeight: '',
      }
    },
    components: {
      pageHeader
    },
    mounted() {
      // 请求一言接口
      let that = this
      that.fun()
      this.winHeight = window.innerHeight + 'px'
      window.setInterval(() => {
        setTimeout(that.fun(), 0)
      }, 5000)
    },
    methods: {
      fun() {
        let that = this
        axios.get('https://v1.hitokoto.cn')
          .then(({
            data
          }) => {
            that.says = data
          })
          .catch(console.error)
      }
    }
  }
</script>

<style lang="less">
@import "../css/saying.less";
  
</style>
