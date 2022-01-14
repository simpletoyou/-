<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: simpletoyou
 * @LastEditTime: 2021-10-12 14:57:19
-->
<template>
<!-- 设置粒子背景 -->
  <div id="app">
    <vue-particles color="#fff" :particleOpacity="0.6" :particlesNumber="20" shapeType="star" :particleSize="2"
      linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">
    </vue-particles>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .particles-js-canvas-el {
   /* height: calc(100% - 100px) !important; */
    position: absolute;
    z-index: 1;
    /* margin-top: 100px; */
  }
  body {
    background: #eaf3fa;
  }
</style>
