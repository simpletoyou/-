<template>
  <div class="index-container">
    <!-- 导航栏 -->
    <page-header></page-header>

    <article>
      <div class="intro">
        <div class="imgBox">
          <img src="../assets/index/intro1.jpg" alt="">
        </div>
        <div class="infoBox">
          <div class="name">Jennifer</div>
          <div class="desc">Keep running.</div>
          <div class="other">
            Chaos is not a pit, Chaos is a ladder. Many who try to climb it fail, and never get to try again, The fall
            breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or
            love: illusions. Only the ladder is real; the climb is all there is.
          </div>
          <!-- <div class="line"></div> -->
        </div>
      </div>
      <div class="currentDate">{{ currentDate }}</div>

      <div class="centerBox">
        <!-- 六张卡片 -->
        <div class="sub-page">
          <div class="sub-page-card">
            <div class="column" v-for="(item, index) in subPageData1" :key="index">
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
                    <span>{{ item.txt
                    }}<svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg"
                        xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8"
                        enable-background="new 0 0 36.1 25.8" xml:space="preserve">
                        <g>
                          <line fill="none" stroke="#979797" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9"
                            x2="34" y2="12.9"></line>
                          <polyline fill="none" stroke="#979797" stroke-width="3" stroke-miterlimit="10"
                            points="22.2,1.1 34,12.9 22.2,24.7   "></polyline>
                        </g>
                      </svg></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="sub-page-card">
            <div class="column" v-for="(item, index) in subPageData2" :key="index">
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
                    <span>{{ item.txt
                    }}<svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg"
                        xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8"
                        enable-background="new 0 0 36.1 25.8" xml:space="preserve">
                        <g>
                          <line fill="none" stroke="#979797" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9"
                            x2="34" y2="12.9"></line>
                          <polyline fill="none" stroke="#979797" stroke-width="3" stroke-miterlimit="10"
                            points="22.2,1.1 34,12.9 22.2,24.7   "></polyline>
                        </g>
                      </svg></span>
                  </button>
                  <!-- <span
                  >{{ item.txt }}
                </span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </article>

    <!-- 尾部 -->
    <!-- <page-footer></page-footer> -->
  </div>
</template>

<script>
import pageHeader from "./pageHeader.vue";
import pageFooter from "./pageFooter.vue";
export default {
  name: "index",
  data() {
    return {
      currentDate: '',
    };
  },
  components: {
    pageHeader,
    pageFooter,
  },
  mounted() {

  },
  async created() {
    this.getDate()
    this.subPageData1 = this.$datas.subPageData1;
    this.subPageData2 = this.$datas.subPageData2;
  },
  methods: {
    // 获取当前日期
    getDate() {
      //获取当前的年月日
      let date_ = new Date();
      let y = date_.getFullYear();
      let m = date_.getMonth() + 1;
      let d = date_.getDate();
      this.currentDate = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    }
  },
};
</script>

<style lang="less">
@themeColor: #5c917b;

.index-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;


  article {
    margin-top: 2rem;
    width: 100%;
    padding-bottom: 1rem;


    .intro {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 12rem;
      margin: 0 auto;

      .imgBox {
        width: 4rem;
        height: 4rem;
        margin-right: .5rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .infoBox {
        position: relative;
        width: 7.5rem;

        .name {
          margin-top: 1.5rem;
          font-size: .4rem;
          line-height: 1rem;
        }

        .desc {
          font-size: .2rem;
          line-height: 1rem;

        }

        .other {
          line-height: .32rem;

          // position: absolute;
          // bottom: -1rem;
          // left: 0;
        }

        .line {
          background: #43447a;
          width: 10rem;
          height: .1rem;
          position: absolute;
          right: 0;
          bottom: 0;
          transform: rotate(-45deg);
        }
      }
    }

    .currentDate {
      width: 100%;
      padding: 2rem 0;
      margin: 2rem 0;
      background: #FFF;
      color: @themeColor;
      font-size: .6rem;
      text-align: center;

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
              font-weight: 500;
              line-height: 32px;
            }

            .desc {
              line-height: 24px;
              margin-bottom: 10px;
            }
          }

          .intro-img {
            width: 100%;
            margin-bottom: 5px;

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
                font-family: 'Playfair Display', serif;
                line-height: 36px;
                text-indent: 0;
              }
            }

            .center {
              cursor: pointer;

              span {
                text-indent: 2em;
                font-size: 14px;
                color: #FFF;
              }

              .btn,
              button {
                border: none;
                font-size: 10px;
                font-size: 1rem;
                letter-spacing: 1.5px;
                text-transform: uppercase;
               
                -webkit-transition: color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1), background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1);
                transition: color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1), background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1);
                display: inline-block;
                cursor: pointer;
                width: 100%;
                outline: none;
                vertical-align: middle;
                text-align: center;
                position: relative;
                overflow: hidden;
              }

              @media (min-width: 400px) {

                .btn,
                button {
                  width: auto;
                }
              }

              @media (min-width: 800px) {

                .btn,
                button {
                  font-size: 1.1rem;
                  // padding: 1.6rem 2.8rem;
                }
              }

              .btn:hover,
              button:hover {
                color: #fff;
              }

              .btn-border {
                background-color: transparent;
              }

              .btn-arrow {
                position: relative;
                -webkit-transition: background-color 300ms ease-out;
                transition: background-color 300ms ease-out;
              }

              .btn-arrow span {
                display: inline-block;
                position: relative;
                -webkit-transition: all 300ms ease-out;
                transition: all 300ms ease-out;
                will-change: transform;
              }

              .btn-arrow:hover span {
                -webkit-transform: translate3d(-1rem, 0, 0);
                transform: translate3d(-1rem, 0, 0);
              }

              .btn-arrow svg {
                position: absolute;
                width: 1.1em;
                right: 0px;
                right: 0rem;
                opacity: 0;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                -webkit-transition: all 300ms ease-out;
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
          }
        }
      }
    }
  }

}
</style>
