import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import saying from '@/components/saying'
import learning from '@/components/learning'
import more from '@/components/more'
import movie from '@/components/movie'
import music from '@/components/music'
import reading from '@/components/reading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/saying',
      name: 'saying',
      component: saying
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/reading',
      name: 'reading',
      component: reading
    }
  ]
})
