<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-03 16:17:48
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-04 17:27:08
 * @FilePath: \my\shushu\src\components\pageHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <nav>
    <ul>
      <li @click="toPage(index)" v-for="(item, index) in menus" :key="index">{{ item }}</li>
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
  },
  methods: {
    toPage(index) {
      if(!index) {
        // 首页
        this.$router.push('/')
      } else if (index===1) {
        // 学习
        this.$router.push('/learning')
      } else if (index ===2) {
        // 生活
        this.$router.push('/life')
      } else {
        // 句子
        this.$router.push('/saying')
      }
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
  font-size: .16rem;
  background: #437661;
  width: 12rem;
  padding: .2rem calc(50% - 6rem);

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li {
      margin-right: .8rem;
      cursor: pointer;
      list-style: none;
    }
  }

}
</style>
