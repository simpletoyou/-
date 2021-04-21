<template>
  <div class="index-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:' + winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="weather-card">
        <div class="main">
          <div class="city">{{weather.city}}</div>
          <div class="temperature">
            <img src="../assets/cloudy.png" alt="">
          {{weather.temperature}}℃
          </div>
        </div>
        <div class="details">
          <div class="item" v-for="(item, index) in weather.forecast">
            <div>{{item.day}}</div>
            <div>{{item.type}}</div>
            <div>{{item.windForward}}&nbsp;{{item.windPower}}级</div>
            <div>{{item.low}}℃~{{item.high}}℃</div>
          </div>

        </div>

      </div>
    </article>
  </div>
</template>

<script>
  // import axios
  import axios from "axios";
  import pageHeader from "./pageHeader.vue";
  export default {
    data() {
      return {
        says: "",
        winHeight: "",
        weather: {},
      };
    },
    components: {
      pageHeader,
    },
    mounted() {
      let that = this;
      this.winHeight = window.innerHeight + "px";
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=广州市")
        .then(({
          data
        }) => {
          if (data.status === 1000) {
            that.weather = data.data;
            that.weather.temperature = data.data.wendu
            for (let i of that.weather.forecast) {
              i.day = i.date.substring(i.date.lastIndexOf("星"), i.date.length);
              i.date = i.date.replace(/\D/g, "");
              i.windPower = i.fengli.replace(/\D/g, "");
              i.high = i.high.replace(/\D/g, "");
              i.low = i.low.replace(/\D/g, "");
              i.windForward = i.fengxiang
            }
          }
        })
        .catch(console.error);
    },
  };
</script>

<style lang="less">
  @line: 30px;
  @color: #fff;
  @bg: #d9d9d9;
  @font: 16px;

  .index-container {
    line-height: @line;
    position: relative;

    li {
      color: @color;
      display: inline-block;
      color: #fff;
      text-decoration: none;
      font-size: @font;
      margin-right: 30px;
      cursor: pointer;
    }

    .banner {
      //红图：https://isujin.com/wp-content/uploads/2018/11/wallhaven-672007-1.png
      //https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg
      filter: brightness(0.6);
      width: 100%;
      background: url(https://isujin.com/wp-content/uploads/2018/11/wallhaven-672007-1.png) center no-repeat;
      background-size: cover;
    }

    article {
      position: absolute;
      top: 5%;
      width: 100%;
      margin: 0 auto;
      .weather-card {
        float: right;
        width: 600px;
        margin-top: 5%;
        margin-right: 2rem;
        border: 1px solid #ffffff3b;
        // background-color: #ff000024;
        padding: 16px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .main {
          display: flex;
          justify-content: space-around;
          align-items: center;
          line-height: 60px;
          padding-bottom: 1.2rem;
          font-size: 1.6rem;
          .temperature {
            display: flex;
            align-items: center;
            img {
              width: 2rem;
              margin-right: 5px;
            }
           }

        }

        .details {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }


    }
  }
</style>
