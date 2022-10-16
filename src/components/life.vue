<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-05 09:26:22
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-05 17:30:40
 * @FilePath: \nft-adminf:\my\shushu\src\components\life.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="life-container">
    <page-header></page-header>
    <article>
      <div class="container">
        <div class="year">
          <span></span>
          <span></span>
          <span></span>
          {{ lifeData.year }}
        </div>
        <!-- -->
        <div class="seasonsBox">
          <div class="season" v-for="(item, index) in lifeData.seasons" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
            <div class="writesBox">
              <div class="write" v-for="(i, idx) in item.writes" :key="idx">
                <div class="title">{{ i.title }}</div>
                <div class="time">{{ i.time }}</div>
                <div class="author">{{ i.author }}</div>
                <div class="imgBox">
                  <img v-for="(item, index) in imgs" :key="index" :src="item" alt="">
                </div>
                <div class="article">{{ i.article }}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from './pageHeader.vue'
import pageFooter from './pageFooter.vue'
export default {
  data() {
    return {
      lifeData: {},
      imgs: [require('../assets/index/rolls.jpg'), require('../assets/index/cups.jpg'), require('../assets/index/plant.jpg')]
    }
  },
  components: {
    pageHeader,
    pageFooter
  },
  mounted() {
    this.lifeData = this.$lifes.life;
    console.log('lifeData', this.lifeData);

  },
  methods: {
  }
}
</script>

<style lang="less">
.life-container {
  display: flex;
  flex-direction: column;

  article {
    width: 100%;
    padding: 2rem 0;

    .container {
      width: 12rem;
      margin: 0 auto;

      .year {
        font-size: .6rem;

        position: relative;
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid #fff;
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          transition: 0.5s;
          animation: animate 6s linear infinite;
        }


        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes animate2 {
          0% {
            transform: rotate(360deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        .square span:nth-child(1) {
          animation: animate 6s linear infinite;
        }

        .square span:nth-child(2) {
          animation: animate 4s linear infinite;
        }

        .square span:nth-child(3) {
          animation: animate2 10s linear infinite;
        }

      }

      .seasonsBox {
        display: flex;
        flex-direction: column;

        .season {
          .title {
            font-size: .4rem;
          }

          .desc {
            font-size: .2rem;
          }

          .writesBox {
            display: flex;
            align-content: center;
            justify-content: space-between;

            .title {
              font-size: .18rem;
            }

            .time,
            .author {
              font-size: .12rem;
            }

            .imgBox {
              width: 12rem;
              display: flex;
              align-items: center;
              justify-content: center;


              img {
                width: 2rem;
                height: 4rem;
                transform: skewX(-20deg);
                margin: 0 .1rem;
              }
            }

            .article {
              font-size: .16rem;
            }
          }
        }
      }


    }





  }
}
</style>
