import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import createTask from '@/components/taskModule/createTask'
import welcome from '@/components/welcome'
import findWage from '@/components/wageModule/findWage'
import issueWage from '@/components/wageModule/issueWage'
import findWageState from '@/components/wageModule/findWageState'
import findWageByUserId from '@/components/wageModule/findWageByUserId'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/createTask',
      name: 'createTask',
      component: createTask
    },
    {
      path: '/findWage',
      name: 'findWage',
      component: findWage
    },
    {
      path: '/issueWage',
      name: 'issueWage',
      component: issueWage
    },
    {
      path: '/findWageState',
      name: 'findWageState',
      component: findWageState
    },
    {
      path: '/findWageByUserId',
      name: 'findWageByUserId',
      component: findWageByUserId
    },
    // {name:'saveTask',path:"/saveTask",component:saveTask},
    // {name:'welcome',path:"/welcome",component:welcome},
  ]
})
