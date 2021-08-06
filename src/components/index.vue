<template>
  <div class="index-container">
    <!-- 导航栏 -->
    <page-header></page-header>
    <!-- 背景图 -->
    <!-- <div class="banner" :style="'height:' + winHeight"></div> -->
    <swiper :options="bannerBox">
      <swiper-slide
        :style="
          'width: 100%;filter: brightness(0.6);height:800px;background: url(' +
          item.src +
          ') center no-repeat; background-size: cover;'
        "
        v-for="(item, index) in slide"
        :key="index"
      >
      </swiper-slide>
    </swiper>

    <!-- 页面主体 -->
    <article style="min-height: 500px">
      <div class="weather-card">
        <div class="main">
          <div class="city">{{ weather.city }}</div>
          <div class="temperature">
            <!-- <img src="../assets/cloudy.png" alt="" /> -->
            {{ weather.temperature }}℃
          </div>
        </div>
        <div class="details">
          <div
            class="item"
            v-for="(item, index) in weather.forecast"
            :key="index"
          >
            <div>{{ item.day }}</div>
            <div>{{ item.type }}</div>
            <div>{{ item.windForward }}&nbsp;{{ item.windPower }}级</div>
            <div>{{ item.low }}℃~{{ item.high }}℃</div>
          </div>
        </div>
      </div>
    </article>
    <!-- <div class="about-box">
      <div class="bg">
        <div>
          <p>楚歌儿</p>
          <p>chugeer</p>
        </div>
      </div>
    </div> -->
    <!-- <div class="more-box">
      <div class="sub-box">
        <div class="title">this is title</div>
        <div class="desc">this is desc</div>
        <div class="imgs">
          <div class="sub-img"></div>
          <div class="sub-img"></div>
          <div class="sub-img"></div>
        </div>
        <p>this is content</p>
      </div>
    </div> -->
    <div class="centerBox">
      <!-- 六张卡片 -->
      <div class="sub-page">
        <div class="sub-page-card">
          <div
            class="column"
            v-for="(item, index) in subPageData1"
            :key="index"
          >
            <div class="top">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
            <div class="intro-img">
              <div class="img-box">
                <img :src="item.img" alt="" />
              </div>
            </div>
            <div class="details">
              <div class="logo">
                <img :src="item.logo" alt="logo" />
                <span>2021-04-28</span>
              </div>
              <div class="center">
                <button class="btn btn-arrow btn-border">
                  <span
                    >{{ item.txt
                    }}<svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="https://www.w3.org/2000/svg"
                      xmlns:xlink="https://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36.1 25.8"
                      enable-background="new 0 0 36.1 25.8"
                      xml:space="preserve"
                    >
                      <g>
                        <line
                          fill="none"
                          stroke="#979797"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          x1="0"
                          y1="12.9"
                          x2="34"
                          y2="12.9"
                        ></line>
                        <polyline
                          fill="none"
                          stroke="#979797"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          points="22.2,1.1 34,12.9 22.2,24.7   "
                        ></polyline>
                      </g></svg
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-page-card">
          <div
            class="column"
            v-for="(item, index) in subPageData2"
            :key="index"
          >
            <div class="top">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
            <div class="intro-img">
              <div class="img-box">
                <img :src="item.img" alt="" />
              </div>
            </div>
            <div class="details">
              <div class="logo">
                <img :src="item.logo" alt="logo" />
                <span>2021-04-28</span>
              </div>
              <div class="center">
                <button class="btn btn-arrow btn-border">
                  <span
                    >{{ item.txt
                    }}<svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="https://www.w3.org/2000/svg"
                      xmlns:xlink="https://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36.1 25.8"
                      enable-background="new 0 0 36.1 25.8"
                      xml:space="preserve"
                    >
                      <g>
                        <line
                          fill="none"
                          stroke="#979797"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          x1="0"
                          y1="12.9"
                          x2="34"
                          y2="12.9"
                        ></line>
                        <polyline
                          fill="none"
                          stroke="#979797"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          points="22.2,1.1 34,12.9 22.2,24.7   "
                        ></polyline>
                      </g></svg
                  ></span>
                </button>
                <!-- <span
                  >{{ item.txt }}
                </span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部内容 -->
    </div>

    <div
      class="goTop iconfont ml-gotop"
      :class="isTop ? 'goTopAfter' : ''"
      @click="goTop()"
    ></div>

    <!-- 尾部 -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "./pageHeader.vue";
import pageFooter from "./pageFooter.vue";
export default {
  name: "index",
  data() {
    return {
      says: "",
      winHeight: "",
      weather: {},
      slide: [],
      bannerBox: {
        slidesPerView: 1, //显示slide的数量
        centeredSlides: true, //居中显示
        loop: true, //循环
        autoplay: true,
        initialSlide: 1, //初始索引
        spaceBetween: 0, //间距
      },

      scrollNum: 0, //滚动距离
      isTop: false, //是否显示回到顶部按钮
      myTimer: -1, //防止点击事件过度
    };
  },
  components: {
    pageHeader,
    pageFooter,
  },
  mounted() {
    this.winHeight = window.innerHeight + "px";

    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 300) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  created() {
    let that = this;
    this.slide = this.$datas.slide;
    this.subPageData1 = this.$datas.subPageData1;
    this.subPageData2 = this.$datas.subPageData2;
    Promise.all([this.$api.getWeather()]).then((data) => {
      // 处理天气数据
      that.weather = data[0].data;
      that.weather.temperature = data[0].data.wendu;
      for (let i of that.weather.forecast) {
        i.day = i.date.substring(i.date.lastIndexOf("星"), i.date.length);
        i.date = i.date.replace(/\D/g, "");
        i.windPower = i.fengli.replace(/\D/g, "");
        i.high = i.high.replace(/\D/g, "");
        i.low = i.low.replace(/\D/g, "");
        i.windForward = i.fengxiang;
      }
    });
  },
  methods: {
    goTop() {
      if (this.myTimer == -1) {
        this.myTimer = setInterval(() => {
          this.scrollNum -= 60;
          if (this.scrollNum <= 0) {
            this.scrollNum = 0;
            window.clearInterval(this.myTimer); //停止执行
            this.myTimer = -1;
          }
          window.scrollTo(0, this.scrollNum); //离开网页顶部的距离
        }, 10);
      }
    },
  },
};
</script>

<style lang="less">
@import "../css/index.less";

#paper-line-draw {
  stroke-dashoffset: 200px;
}
</style>
