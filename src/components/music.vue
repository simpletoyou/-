<template>
  <div class="music-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:'+winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>
    <!-- 页面主体 -->
    <article style="z-index: 999;">
      <div>
        <div class="listTab">
          <div @click="getList(19723756)">
            <span>云音乐飙升榜</span>
          </div>
          <div @click="getList(3779629)"> <span>云音乐新歌榜</span></div>
          <div @click="getList(3778678)"> <span>云音乐热歌榜</span></div>
          <div @click="getList(2250011882)"> <span>抖音排行榜</span></div>
        </div>
        <p style="padding-left: 12%;" v-if="data.description">{{data.description}}</p>
      </div>
      <!-- 歌单列表 -->
      <div style="height: 70vh;overflow: hidden;">
        <div style="padding: 0 12%;">
          <aplayer autoplay showlrc :music="songList[0]" :list="songList" :src="theMusic.src"></aplayer>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  // import axios
  import axios from "axios"
  // 引入歌曲播放插件
  import Aplayer from 'vue-aplayer'
  import pageHeader from './pageHeader.vue'
  export default {
    data() {
      return {
        says: '',
        winHeight: '',
        data: {},
        theMusic: {
          src: ''
        }, //当前音乐
        songList: [],
      }
    },
    components: {
      pageHeader,
      'aplayer': Aplayer
    },
    async mounted() {
      this.winHeight = window.innerHeight + 'px'
      this.fun()
    },
    methods: {
      async fun() {
        this.data = await this.getList()
        this.theMusic = await this.getSong()
        for(let i of this.data.tracks) {
          this.songList.push({
            id: i.id,
            title: i.name,
            artist:i.artists[0].name,
            pic: i.artists[0].picUrl,

          })
        }
        for(let i of this.songList) {
          i.src = await this.getSong(i.id).url
        }
      },
      async getList(num = 19723756) {
        return new Promise((resolve, reject) => {
          axios.get(`https://music.163.com/api/playlist/detail?id=${num}`)
            .then(({
              data
            }) => {
              let datas = {}
              datas.description = data.result.description
              datas.tracks = data.result.tracks
              for (let i of datas.tracks) {
                i.singers = i.artists
              }
              this.data = datas
              this.$forceUpdate()
              resolve(datas)
            })
            .catch(console.error)
        })

      },
      toPlay() {
      },
      getSong() {
        let item = this.data.tracks[0]
        return new Promise((resolve, reject) => {
          axios.get(`https://api.imjad.cn/cloudmusic?type=song&id=${item.id}`)
          	.then(({
          		data
          	}) => {
              let datas = {}
          		datas.src = data.data[0].url
          		datas.title = item.name
          		datas.artist = item.name
          		datas.pic = item.album.picUrl
              resolve(datas)
          	})
          	.catch(console.error)
        })
      },
    }
  }
</script>

<style lang="less">
  @line: 30px;
  @line2: 60px;
  @color: #FFF;
  @bg: #d9d9d9;
  @font: 16px;

  ::-webkit-scrollbar {
    width: 0 !important
  }


  .music-container {
    line-height: @line;
    position: relative;


    li {
      color: @color;
      display: inline-block;
      color: #FFF;
      text-decoration: none;
      font-size: @font;
      margin-right: 30px;
      cursor: pointer;
    }


    .banner {
      filter: brightness(0.6);
      width: 100%;
      background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg) center no-repeat;
      background-size: cover
    }

    article {
      position: absolute;
      top: 8%;
      left: 0;
      width: 100%;
      height: 92%;
      padding: 0;
      line-height: @line2;

    }

    ::-webkit-scrollbar {
      width: 0 !important
    }

    .listTab {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .songItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    audio {
      width: 100%;
      position: absolute;
      bottom: 1.25rem;
    }

    .listTab span {
      cursor: pointer;
    }

    .aplayer {
      background-color: inherit;
      .aplayer-list-light, .aplayer-list ol li {
        height: 60px;
        line-height: 60px;
      }
      .aplayer-author::before {
        content: '--- ';
      }
      .aplayer-author, .aplayer-list-author {
        color: #FFF!important;
      }
      .aplayer-list ol li.aplayer-list-light, .aplayer-list ol li:hover {
        background-color: inherit;
      }
      .aplayer-list ol li .aplayer-list-index {
        color: #FFF;
      }
      .aplayer-list ol li .aplayer-list-cur {
        height: 50px;
      }
      .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill {
        fill: #FFF;
      }
      .aplayer-list ol li {
        font-size: .9rem;
        border-top: 1px solid rgba(255,255,255,.2);
      }
    }




  }
</style>
