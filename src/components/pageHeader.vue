
<template>
  <nav>
    <ul>
      <li v-for="(item, index) in menus" :key="index">{{ item }}</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'pageHeader',
  data() {
    return {
      menus: ['首页', '学习', '生活', '句子']
    }
  }

}</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  font-size: .18rem;
  padding: .32rem 0;
  background: #5c917b;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li {
      margin-right: .4rem;
      cursor: pointer;
      list-style: none;
    }
  }

}
</style>
