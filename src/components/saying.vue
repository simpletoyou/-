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
  @line: 30px;
  @color: #FFF;
  @bg: #d9d9d9;
  @font: 16px;

  .saying-container {
    line-height: @line;
    position: relative;
    color: #FFF;

    li {
      color: @color;
      display: inline-block;
      color: #FFF;
      text-decoration: none;
      font-size: @font;
      margin-right: 30px;
      cursor: pointer;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 0;
      width: 96%;
      padding: 0 2%;
    }

    .banner {
      filter: brightness(0.6);
      width: 100%;
      background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg) center no-repeat;
      background-size: cover
    }

    article {
      position: absolute;
      top:  38%;
      width: 94%;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 0 3%;

      .main {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.6rem;

        .text {
          padding: 0 20px;
          line-height: 3.75rem;
        }
      }

      .from {
        font-size: 18px;
        margin-top: 32px;
      }
    }
  }
</style>
