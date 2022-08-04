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
    };
  },
  components: {
    pageHeader,
    pageFooter,
  },
  mounted() {

  },
  async created() {

  },
  methods: {

  },
};
</script>

<style lang="less">
.index-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  article {
    margin-top: 2rem;
    width: 100%;

    .intro {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

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
  }

}
</style>
