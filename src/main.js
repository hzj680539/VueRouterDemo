import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
