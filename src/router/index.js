import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import register from '@/components/register'
import login from '@/components/login'
import echarts from '@/components/echarts'
import Invesment from '@/components/Invesment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/Invesment',
      name: 'Invesment',
      component: Invesment
    },
  ]
})
