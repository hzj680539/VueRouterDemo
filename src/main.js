import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
import book from './component/book.vue'
import movie from './component/movie.vue'
import music from './component/music.vue'
import chinese from './component/book/chinese.vue'
import english from './component/book/english.vue'
import statistic from './component/book/statistic.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: movie
    },
    {
      path: '/book',
      component: book,
      children: [
        {
          path: 'chinese',
          component: chinese
        },
        {
          path: 'english',
          component: english
        },
        {
          path: 'statistic',
          component: statistic
        }
      ]
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/music',
      component: music
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
