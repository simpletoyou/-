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
      <!--  :src="theMusic.src" -->
      <!-- autoplay -->
      <div style="height: 70vh;overflow: hidden;">
        <div style="padding: 0 12%;">
          <aplayer showlrc :music="theMusic" :list="songList"></aplayer>
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
        theMusic: { title: ' ', artist: ' ', src: ' ', pic: ' '},//当前音乐
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
        // this.theMusic = await this.getSong()
        for(let i of this.data.tracks) {
          this.songList.push({
            id: i.id,
            title: i.name,
            artist:i.artists[0].name,
            pic: i.artists[0].picUrl,

          })
        }
        // for(let i of this.songList) {
        //   i.src = await this.getSong(i.id).url
        // }
      },
      async getList(num = 19723756) {
        return new Promise((resolve, reject) => {
          axios.get(`/service/api/playlist/detail?id=${num}`)
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
      // getSong() {
      //   let item = this.data.tracks[0]
      //   return new Promise((resolve, reject) => {
      //     axios.get(`https://api.imjad.cn/cloudmusic?type=song&id=${item.id}`)
      //     	.then(({
      //     		data
      //     	}) => {
      //         let datas = {}
      //     		datas.src = data.data[0].url
      //     		datas.title = item.name
      //     		datas.artist = item.name
      //     		datas.pic = item.album.picUrl
      //         resolve(datas)
      //     	})
      //     	.catch(console.error)
      //   })
      // },
    }
  }
</script>

<style lang="less">
@import "../css/music.less";
  
</style>
