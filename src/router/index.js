import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import createUser from '@/components/adminModule/createUser'
import welcome from '@/components/welcome'
import createTask from '@/components/taskModule/createTask'
import findTask from '@/components/taskModule/findTask'
import findWage from '@/components/wageModule/findWage'
import issueWage from '@/components/wageModule/issueWage'
import findWageState from '@/components/wageModule/findWageState'
import findWageByUserId from '@/components/wageModule/findWageByUserId'
import seleteAttendance from '@/components/attendanceModule/selectAttendance'
import findAffiches from '@/components/affiche/findAffiches'
import saveAffiche from '@/components/affiche/saveAffiche'
import findTaskByUserId from '@/components/taskModule/findTaskByUserId'
import associateWith from '@/components/taskModule/associateWith'
import createPlan from '@/components/taskModule/createPlan'
import checkTask from '@/components/taskModule/checkTask'

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
      path: '/saveAffiche',
      name: 'saveAffiche',
      component: saveAffiche
    },
    {
      path: '/findAffiches',
      name: 'findAffiches',
      component: findAffiches
    },
    {
      path: '/findTaskByUserId',
      name: 'findTaskByUserId',
      component: findTaskByUserId
    },
    {
      path: '/associateWith',
      name: 'associateWith',
      component: associateWith
    },
    {
      path: '/createPlan',
      name: 'createPlan',
      component: createPlan
    },
    {
      path: '/checkTask',
      name: 'checkTask',
      component: checkTask
    },
  ]
})
