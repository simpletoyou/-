<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-05-14 15:06:36
-->
<template>
  <div class="more-container test">
    <!-- 背景图 -->
    <div class="banner" :style="'height:' + winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="mover">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 737 251"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="paper-line-draw"
            fill="transparent"
            stroke="#F36464"
            stroke-width="20"
            stroke-linecap="round"
            d="M25 188C74 139 358.5 15.5 358.5 225.5C358.5 238 445 25 712.5 25"
            class="path"
            style="stroke-dasharray: 853.565px; stroke-dashoffset: 853.565px"
          ></path>
        </svg>
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
    };
  },
  components: {
    pageHeader,
  },
  mounted() {
    this.winHeight = window.innerHeight + "px";

    const isSupported =
      window.CSS && window.CSS.supports && window.CSS.supports("--a", 0);

    if (isSupported) {
      /* supported */
      console.log("yes");
    } else {
      /* not supported */
      console.log("no");
    }

    console.log(document.getElementsByClassName("test")[0].style);
    // 读取变量
    let aa = document.body.style.getPropertyValue("--primary").trim();
    console.log("aa", aa);
    // '#7F583F'

    // let fun1 = new Promise((resolve, reject) => {
    //   this.$api.getWeather().then((data) => {
    //     resolve(data);
    //   });
    // }).then(
    //   (rep) => {
    //     console.log("this is rep", rep);
    //   },
    //   (err) => {}
    // );

    // console.log("fun1", fun1);

    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      let aa = document.getElementById("paper-line-draw");
      aa.style.setProperty("stroke-dashoffset", top * 10 + "px");

      // root.addEventListener("mousemove", (e) => {
      // });
    });
  },
};
</script>

<style lang="less">
@import "../css/more.less";
 
.mover {
  width: 100%;
  height: 200px;
  border: 1px solid sandybrown;
  position: absolute;
  left: 0;
  top: 50px;
}


</style>
