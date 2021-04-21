<template>
  <div>
    <nav style="z-index: 999;">
      <div class="navSty">
          <div @click="$router.push('/')">首页</div>
          <div @click="$router.push('/learning')">学习</div>
          <div @click="$router.push('/saying')">美句</div>
          <div @click="$router.push('/music')">音乐</div>
          <div @click="$router.push('/movie')">电影</div>
          <div @click="$router.push('/reading')">阅读</div>
          <div @click="$router.push('/more')">更多</div>
      </div>
      <p class="myInfo">楚歌儿</p>
    </nav>
  </div>
</template>
<style lang="less">
  nav {
    display: flex;
    justify-content: space-between;
    adivgn-items: center;
    position: absolute;
    top: 0;
    width: 96%;
    padding: 0 2%;
  }

  .myInfo {
    cursor: pointer;
  }

  .navSty {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 62px;
    div {
      margin-right: 1.5rem;
    }
  }

  .navSty div {
    width: 3.3rem;
    height: 3.125rem;
    line-height: 3.125rem;
    text-align: center;
    position: relative;
  }

  .navSty div:after {
    content: "";
    width: 0;
    height: 3px;
    background: pink;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all .8s;
  }

  .navSty div:hover:after {
    left: 0%;
    width: 100%;
  }
</style>
