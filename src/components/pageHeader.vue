<template>
  <div>
    <nav style="z-index: 999">
      <div class="navSty">
        <div @click="$router.push('/')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>首页</span>
        </div>
        <div @click="$router.push('/learning')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>学习</span>
        </div>
        <div @click="$router.push('/saying')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>美句</span>
        </div>
        <div @click="$router.push('/music')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>音乐</span>
        </div>
        <div @click="$router.push('/movie')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>电影</span>
        </div>
        <div @click="$router.push('/reading')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>阅读</span>
        </div>
        <div @click="$router.push('/more')" class="navitem">
          <svg height="40" width="60" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="60" />
          </svg>
          <span>更多</span>
        </div>

        <!-- <div @click="$router.push('/learning')">学习</div>
        <div @click="$router.push('/saying')">美句</div>
        <div @click="$router.push('/music')">音乐</div>
        <div @click="$router.push('/movie')">电影</div>
        <div @click="$router.push('/reading')">阅读</div>
        <div @click="$router.push('/more')">更多</div> -->
      </div>
      <p class="myInfo">楚歌儿</p>
    </nav>
  </div>
</template>
<style lang="less">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 96%;
  padding: 0 2%;
}

.myInfo {
  cursor: pointer;
  color: #fff;
}

.navSty {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 62px;
  color: #fff;
}
.navitem {
  cursor: pointer;
  position: relative;
}

// .navSty div {
//   width: 3.3rem;
//   height: 3.125rem;
//   line-height: 3.125rem;
//   text-align: center;
//   position: relative;
// }

// .navSty div:after {
//   content: "";
//   width: 0;
//   height: 3px;
//   background: pink;
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transition: all 0.8s;
// }

// .navSty div:hover:after {
//   left: 0%;
//   width: 100%;
// }

#shape {
  stroke-width: 2px;
  fill: transparent;
  stroke: pink;
  stroke-dasharray: 50 400;
  stroke-dashoffset: -104;
  transition: 1s all ease;
}
#shape:hover {
  stroke-dasharray: 50 0;
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke: rgb(134, 193, 228);
}
.navitem {
  position: relative;
  width: 96px;
  span {
    position: absolute;
    top: 6px;
    left: 16px;
    z-index: -1;
  }
}
</style>
