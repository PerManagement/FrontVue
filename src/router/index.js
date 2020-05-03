import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import createTask from '@/components/taskModule/createTask'
import welcome from '@/components/welcome'
import findAffiches from '@/components/afficheVue/findAffiches'
import saveAffiche from '@/components/afficheVue/saveAffiche'

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
      path: '/findAffiches',
      name: 'findAffiches',
      component: findAffiches
    },
    {
      path: '/saveAffiche',
      name: 'saveAffiche',
      component: saveAffiche
    },
    // {name:'saveTask',path:"/saveTask",component:saveTask},
    // {name:'welcome',path:"/welcome",component:welcome},
  ]
})
