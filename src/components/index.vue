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
    <div class="index-card">
      <!-- svg动画 -->
      <!-- <svg width="100%" height="100%" viewBox="0 0 737 251" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="paper-line-draw" d="M25 188C74 139 358.5 15.5 358.5 225.5C358.5 238 445 25 712.5 25" stroke="#F36464" stroke-width="49" stroke-linecap="round"></path>
      </svg> -->
      <!-- <svg width="100%" height="100%" viewBox="0 0 737 251" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="transparent"
          stroke="#F36464" stroke-width="20" stroke-linecap="round"
          d="M25 188C74 139 358.5 15.5 358.5 225.5C358.5 238 445 25 712.5 25"
          class="path"
        ></path>
      </svg> -->
    </div>
    <!-- <div class="about-box">
      <div class="bg">
        <div>
          <p>楚歌儿</p>
          <p>chugeer</p>
        </div>
      </div>
    </div> -->
    <div class="more-box">
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
    </div>
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
              <div class="bottomText">
                <!-- <div class="arrow">
                  <svg t="1619599251871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8483" width="12" height="12"><path d="M633.728 172.928a25.6 25.6 0 0 1 18.112 7.488l313.408 313.472a25.6 25.6 0 0 1 0 36.224l-313.408 313.408a25.6 25.6 0 0 1-36.224-36.224l295.296-295.36-295.296-295.36a25.6 25.6 0 0 1 18.112-43.712z" p-id="8484" fill="#515151"></path><path d="M76.8 486.4h870.4a25.6 25.6 0 1 1 0 51.2H76.8a25.6 25.6 0 1 1 0-51.2z" p-id="8485" fill="#515151"></path></svg>
               </div> -->
                <span>{{ item.txt }}</span>
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
              <!-- <span>{{ item.txt }}</span> -->
              <div class="center">
                <!-- <div class="btn btn-reverse btn-arrow"> -->
                <span
                  >{{ item.txt }}
                  <!-- <svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg"
						xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8"
						enable-background="new 0 0 36.1 25.8" xml:space="preserve">
						<g>
							<line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9"
								x2="34" y2="12.9"></line>
							<polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10"
								points="22.2,1.1 34,12.9 22.2,24.7   "></polyline>
						</g>
					</svg> -->
                </span>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部内容 -->
    </div>

    <!-- 尾部 -->
    <page-footer></page-footer>
  </div>
</template>

<script>
// import axios
import axios from "axios";
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
      // 学习,美句,音乐,电影,阅读,更多
    };
  },
  components: {
    pageHeader,
    pageFooter,
  },
  mounted() {
    this.winHeight = window.innerHeight + "px";
  },
  created() {
    let that = this;
    this.slide = this.$datas.slide;
    this.subPageData1 = this.$datas.subPageData1;
    this.subPageData2 = this.$datas.subPageData2;
    Promise.all([this.$datas.getWeather()]).then((data) => {
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
};
</script>

<style lang="less">
@line: 30px;
@color: #fff;
@bg: #d9d9d9;
@font: 16px;
.particles-js-canvas-el {
  height: 600px !important;
}

.index-container {
  line-height: @line;
  position: relative;
  // img {
  //   width: 100%;
  // }

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
    background: url(https://isujin.com/wp-content/uploads/2018/11/wallhaven-672007-1.png)
      center no-repeat;
    background-size: cover;
  }

  article {
    position: absolute;
    top: 0%;
    width: 100%;
    margin: 0 auto;
    z-index: 3;
    .weather-card {
      float: right;
      width: 500px;
      margin-top: 8%;
      margin-right: 2rem;
      border: 1px solid #ffffff3b;
      // background-color: #ff000024;
      padding: 16px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      color: #fff;

      .main {
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 60px;
        padding-bottom: 1.2rem;
        font-size: 1.2rem;
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

  .swiper-container {
    z-index: -1;
    .swiper-slide {
      width: 100%;
      height: 700px;
    }
  }

  .index-card {
    svg {
      display: block;
      position: absolute;
      .path {
        padding: 0 4%;
        stroke-dasharray: 850;
        stroke-dashoffset: 0;
        animation: dash 2s linear;
      }
      @keyframes dash {
        from {
          stroke-dashoffset: 850;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    }
  }
  .centerBox {
    display: flex;
    justify-content: center;
    padding: 3% 0;
  }
  .sub-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1200px;
    .sub-page-card {
      display: flex;
      flex-direction: column;
      flex: 1;
      .column {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 30px 20px;
        padding: 10px 20px;
        .top {
          .title {
            color: #000;
            font-weight: 500;
            line-height: 32px;
          }
          .desc {
            color: #666;
            line-height: 24px;
            margin-bottom: 10px;
          }
        }
        .intro-img {
          width: calc(100% - 40px);
          .img-box {
            overflow: hidden;
            img {
              width: 100%;
              transition: all 1s;
              display: block;
              cursor: pointer;
            }
            img:hover {
              transform: scale(1.1);
            }
          }
        }
        .details {
          .logo {
            display: flex;
            align-items: center;
            line-height: 24px;
            img {
              width: 24px;
              height: 24px;
              margin-right: 5px;
            }
            span {
              color: gray;
              line-height: 36px;
              text-indent: 0;
            }
          }
          .center {
            cursor: pointer;
            span {
              text-indent: 2em;
              color: #242424;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .bottomText {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .about-box {
    .bg {
      width: 100%;
      height: 500px;
      background: url(../assets/index/img_bg.jpg) center no-repeat;
      background-size: cover;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        p {
          padding: 0 40px;
          font-size: 32px;
          color: #fff;
          margin-top: 0;
        }
      }
    }
  }
  .more-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    .sub-box {
      padding-top: 50px;
      width: 1200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      line-height: 48px;
      .title {
        font-weight: 500;
        color: rgb(61, 57, 57);
        font-size: 32px;
      }
      .desc {
        font-size: 20px;
        color: rgb(90, 77, 77);
      }
      .imgs {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sub-img {
          cursor: pointer;
          margin: 30px;
          width: 360px;
          height: 300px;
          background: url(../assets/index/img_bg.jpg) center no-repeat;
          background-size: cover;
        }
      }
    }
  }

  .btn {
    border: none;
    text-transform: uppercase;
    // transition: color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1), background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1);
    display: inline-block;
    cursor: pointer;
    width: calc(100% - 60px);
    vertical-align: middle;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 0 30px;
  }

  .btn-arrow {
    position: relative;
    // transition: background-color 300ms ease-out;
  }

  .btn-arrow span {
    display: inline-block;
    position: relative;
    // transition: all 300ms ease-out;
    will-change: transform;
  }

  .btn-arrow:hover span {
    transform: translate3d(-1rem, 0, 0);
  }

  .btn-arrow svg {
    position: absolute;
    width: 1.1em;
    right: 0px;
    right: 0rem;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 300ms ease-out;
    will-change: right, opacity;
  }

  .btn-arrow svg * {
    stroke-width: 5;
    stroke-color: transparent;
  }

  .btn-arrow:hover svg {
    opacity: 1;
    right: -2rem;
  }
}
</style>
