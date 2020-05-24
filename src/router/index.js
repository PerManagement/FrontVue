import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import createUser from '@/components/adminModule/createUser'
import welcome from '@/components/welcome'
import createTask from '@/components/taskModule/createTask'
import findPlans from '@/components/planModule/findPlans'
import findTask from '@/components/taskModule/findTask'
import findWage from '@/components/wageModule/findWage'
import issueWage from '@/components/wageModule/issueWage'
import findWageState from '@/components/wageModule/findWageState'
import findWageByUserId from '@/components/wageModule/findWageByUserId'
import seleteAttendance from '@/components/attendanceModule/selectAttendance'
import saveOvertim from '@/components/attendanceModule/saveOvertim'
import findOvertimByUpno from '@/components/attendanceModule/findOvertimByUpno'
import findAffiches from '@/components/affiche/findAffiches'
import saveAffiche from '@/components/affiche/saveAffiche'

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
    {
      path: '/findTask',
    name: 'findTask',
    component: findTask
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
    {
      path: '/createUser',
      name: 'createUser',
      component: createUser
    },
    {
      path: '/seleteAttendance',
      name: 'seleteAttendance',
      component: seleteAttendance
    },
    {
      path: '/saveOvertim',
      name: 'saveOvertim',
      component: saveOvertim
    },
    {
      path: '/findOvertimByUpno',
      name: 'findOvertimByUpno',
      component: findOvertimByUpno
    },
    {
      path: '/saveAffiche',
      name: 'saveAffiche',
      component: saveAffiche
    },
    {
      path: '/findAffiches',
      name: 'findAffiches',
      component: findAffiches
    },
    // {name:'saveTask',path:"/saveTask",component:saveTask},
    // {name:'welcome',path:"/welcome",component:welcome},
  ]
})
