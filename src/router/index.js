import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import( /* webpackChunkName: "text" */ '../pages/login.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import( /* webpackChunkName: "text" */ '../pages/index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import( /* webpackChunkName: "list" */ '../pages/list.vue')
    },

  ]
})
