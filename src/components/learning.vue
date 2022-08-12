<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-05-14 16:13:46
-->
<template>
  <div class="learn-container">
    <!-- 导航栏 -->
    <page-header></page-header>
    <!-- 页面主体 -->
    <article>
      <div class="inner-box">
        <div class="card" v-for="(item, index) in list" :key="index">
          <span class="card-title">{{ item.title }}</span>
          <div class="card-details" style="display: flex;">
            <!-- <img class="card-details__img" src="../assets/index/music.svg" alt="">
            <span class="card-details__author">{{ item.author }}</span> -->
            <span class="card-details__time">{{ item.time }}</span>
          </div>
          <span class="card-content">{{ item.content }}</span>
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
      says: '',
      list: '',//获取学习卡片数据
    }
  },
  components: {
    pageHeader,
    pageFooter
  },

  created() {
    this.list = this.$datas.learnDatas
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


  article {
    color: #FFF;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0 1rem;


    .inner-box {
      width: 12rem;
      display: flex;
      flex-direction: column;

      .card {
        border: 1px solid rgba(255, 255, 255,.5);
        margin-bottom: 1rem;
        padding: .2rem;
        border-radius: 4px;
        cursor: pointer;

        .card-title {
          font-size: .2rem;
          color: #FFF ;
        }

        .card-details {
          display: flex;
          align-items: center;

          .card-details__img {
            width: .2rem;
            height: .2rem;
            margin-right: 4px;
          }

          .card-details__author {
            font-size: .16rem;
            color: #ccc;
            margin-right: 4px;

          }

          .card-details__time {
            color: #ededed;
            font-size: .12rem;
          }
        }

        .card-content {
          font-size: .16rem;
          color: #FFF;
          line-height: .2rem;
        }
      }
    }
  }
}
</style>
