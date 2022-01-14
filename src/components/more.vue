<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-08-18 17:37:01
-->
<template>
  <div class="more-container test">
    <!-- 背景图 -->
    <!-- <div class="banner" :style="'height:' + winHeight"></div> -->
    <!-- 导航栏 -->
    <!-- <page-header></page-header> -->

    <ul class="cards">
      <li class="title"><h2>Slide right</h2></li>
      <li class="card card-1">
        <img src="../assets/banner/banner1.jpg" />
        <div class="content">
          <h1>Card 1 Title</h1>
          <p>Card description</p>
        </div>
      </li>
      <li class="card card-2">
        <img src="../assets/banner/banner3.jpg" />
        <div class="content">
          <h1>Card 2 Title</h1>
          <p>Card description</p>
        </div>
      </li>
      <li class="card card-3">
        <img src="../assets/banner/banner4.jpg" />
        <div class="content">
          <h1>Card 3 Title</h1>
          <p>Card description</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import pageHeader from "./pageHeader.vue";
export default {
  data() {
    return {
      says: "",
      winHeight: "",
    };
  },
  components: {
    pageHeader,
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      effect: "coverflow", //3d滑动
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      slidesPerView: 2,
      coverflow: {
        rotate: 0, //设置为0
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true,
      },
    });
  },
};
</script>

<style lang="less">
ul.cards {
	width: 660px;
	margin: 0 auto 20px;
	height: 300px;
	list-style-type: none;
	position: relative;
	padding: 20px 0;
	cursor: pointer
}

ul.cards li.title {
	margin: 0 0 20px
}

ul.cards li.title h2 {
	font-weight: 700
}

ul.cards li.card {
	background: #fff;
	overflow: hidden;
	height: 200px;
	width: 200px;
	border-radius: 10px;
	position: absolute;
	left: 0;
	box-shadow: 1px 2px 2px 0 #aaa;
	-webkit-transition: all .4s cubic-bezier(.63,.15,.03,1.12);
	transition: all .4s cubic-bezier(.63,.15,.03,1.12)
}

ul.cards li.card img {
	max-width: 100%;
	padding: 5px;
	height: auto
}

ul.cards li.card div.content {
	padding: 5px 10px
}
ul.cards li.card.card-1 {
	z-index: 10;
	-webkit-transform: rotateZ(-2deg);
	transform: rotateZ(-2deg)
}

ul.cards li.card.card-2 {
	z-index: 9;
	-webkit-transform: rotateZ(-7deg);
	transform: rotateZ(-7deg);
	-webkit-transition-delay: 50ms;
	transition-delay: 50ms
}

ul.cards li.card.card-3 {
	z-index: 8;
	-webkit-transform: rotateZ(5deg);
	transform: rotateZ(5deg);
	-webkit-transition-delay: .1s;
	transition-delay: .1s
}

</style>
