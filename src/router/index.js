import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import welcome from '@/components/welcome'
import createTask from '@/components/taskModule/createTask'
import findPlans from '@/components/planModule/findPlans'

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
      path: '/findPlans',
      name: 'findPlans',
      component: findPlans
    },
    // {name:'saveTask',path:"/saveTask",component:saveTask},
    // {name:'welcome',path:"/welcome",component:welcome},
  ]
})
