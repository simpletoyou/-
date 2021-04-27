<template>
  <div class="index-container">
    <!-- 背景图 -->
    <!-- <div class="banner" :style="'height:' + winHeight"></div> -->
    <swiper :options="bannerBox">
      <swiper-slide
        :style="
          'width: 100%;filter: brightness(0.6);height:600px;background: url(' +
          item.src +
          ') center no-repeat; background-size: cover;'
        "
        v-for="(item, index) in slide"
        :key="index"
      >
      </swiper-slide>
    </swiper>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article style="min-height: 600px">
      <div class="weather-card">
        <div class="main">
          <div class="city">{{ weather.city }}</div>
          <div class="temperature">
            <img src="../assets/cloudy.png" alt="" />
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
    <div class="sub-page">
      <div
        class="sub-page-card"
        v-for="(item, index) in subPageData"
        :key="index"
      >
        <div class="top">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
        <div class="intro-img">
          <img :src="item.img" alt="" />
        </div>
        <div class="details">
          <div class="logo">
            <img :src="item.logo" alt="logo" />
            <span>1111111</span>
          </div>
          <p>{{ item.txt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import pageHeader from "./pageHeader.vue";
export default {
  name: "index",
  data() {
    return {
      says: "",
      winHeight: "",
      weather: {},
      slide: [
        {
          name: "1",
          src: require("../assets/banner/banner1.jpg"),
        },
        {
          name: "2",
          src: require("../assets/banner/banner2.png"),
        },
        {
          name: "3",
          src: require("../assets/banner/banner3.jpg"),
        },
        {
          name: "4",
          src: require("../assets/banner/banner4.jpg"),
        },
        {
          name: "5",
          src: require("../assets/banner/banner5.jpg"),
        },
      ],
      bannerBox: {
        slidesPerView: 1, //显示slide的数量
        centeredSlides: true, //居中显示
        loop: true, //循环
        autoplay: true,
        initialSlide: 1, //初始索引
        spaceBetween: 0, //间距
      },
      // 学习,美句,音乐,电影,阅读,更多
      subPageData: [
        {
          title: "学习",
          desc:
            "我一直在思考一个人的一生怎么能一无所成呢。事实就是这么悲哀，不是所有的人都能功成名就。我们中有些人注定要在日常生活的点滴中寻找生命的意义。",
          img: require("../assets/banner/banner6.jpg"),
          logo: require("../assets/index/learn.svg"),
          txt:
            "I still keep thinking about how an entire life can seemingly amount to nothing. I guess the sad truth is, not everyone will accomplish something great.  Some of us may just have to find meaning in the little moments that make up life.",
        },
        {
          title: "美句",
          desc:
            "在爱情里快乐与痛苦仅一线之隔。事实上，人们普遍相信没有痛苦的恋爱不值得拥有。对某些人来说，痛苦意味着成长。但是我们怎么能知道何时成长的痛苦会转变成疼痛的痛苦?若我们继续走在那条线上，我们算是受虐狂还是乐观主义?谈到爱情，如何能知道是真的够了?",
          img: require("../assets/banner/banner7.jpg"),
          logo: require("../assets/index/says.svg"),
          txt:
            "In love relationships, there is a fine line between pleasure and pain. In  fact, it's a common belief that a relationship without Pain is a relationship  not worth having.To some, pain implies growth. But how do we know when the growing pains stop and the ''Pain Pains'' take over?Are we masochists or optimists, if we continue to walk that Fine line?When it comes to relationships, how do you know when enough is enough?",
        },
        {
          title: "音乐",
          desc: "和谐,与持久或永恒无关,而是不同的声音汇集在一起。",
          img: require("../assets/banner/banner8.jpg"),
          logo: require("../assets/index/music.svg"),
          txt:
            "Harmony, it's not about what's lasting or permanent. It is about individual voices coming together.",
        },
        {
          title: "电影",
          desc:
            "Never forget what you are, for surely the world will not. Makeit your strength. Then it can never be your weakenss. Armor yourself in it, and it will never be used to hurt you.",
          img: require("../assets/banner/banner9.jpg"),
          logo: require("../assets/index/movie.svg"),
          txt:
            "Chaos is not a pit, Chaos is a ladder. Many who try to climb it fail, and never get to try again, The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love:  illusions. Only the ladder is real; the climb is all there is.",
        },
        {
          title: "阅读",
          desc: "这么说吧，人生漫漫，凡是有价值的事， 实现起来都很困难",
          img: require("../assets/banner/banner10.jpg"),
          logo: require("../assets/index/read.svg"),
          txt:
            "Let me tell you something about life. Anything that’s worth doing is hard.",
        },
        {
          title: "更多",
          desc: "痛苦分两种，一种让你变得更强，另一种毫无价值，只是徒添折磨。",
          img: require("../assets/banner/banner11.jpg"),
          logo: require("../assets/index/learn.svg"),
          txt:
            "There are two kinds of pain. The sort of pain that makes you strong or useless pain...The sort of pain that's only suffering.",
        },
      ],
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
      .then(({ data }) => {
        if (data.status === 1000) {
          that.weather = data.data;
          that.weather.temperature = data.data.wendu;
          for (let i of that.weather.forecast) {
            i.day = i.date.substring(i.date.lastIndexOf("星"), i.date.length);
            i.date = i.date.replace(/\D/g, "");
            i.windPower = i.fengli.replace(/\D/g, "");
            i.high = i.high.replace(/\D/g, "");
            i.low = i.low.replace(/\D/g, "");
            i.windForward = i.fengxiang;
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
      width: 600px;
      margin-top: 8%;
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
  .sub-page {
    // display: flex;
    // flex-wrap: wrap;
    // flex: 1 1 100%;
    // box-sizing: border-box;
    // max-width: 100%;
    // padding: 2%;
    display: grid;
    grid-template-columns: 50% 50%;
    .sub-page-card {
      // width: 40%;
      // width: calc(50% - 82px);
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 20px;
      padding: 20px;
      .top {
        .title {
          color: #000;
          font-weight: 500;
          line-height: 32px;
        }
        .desc {
          color: grey;
          line-height: 24px;
          margin-bottom: 10px;
        }
      }
      .intro-img {
        width: calc(100% - 40px);
        img {
          width: 100%;
        }
      }
      .details {
        .logo {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
          }
          span {
            color: #000;
          }
        }
        p {
          line-height: 32px;
          color: #000;
        }
      }
    }
  }
}
</style>
