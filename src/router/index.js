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
import selectAttendance from '@/components/attendanceModule/selectAttendance'
import findAffiches from '@/components/affiche/findAffiches'
import selectOvertim from '@/components/overtimModule/selectOvertim'
import selectLeave from '@/components/leaveModule/selectLeave'
import createLeave from '@/components/leaveModule/createLeave'
import selectEvection from '@/components/evectionModule/selectEvection'
import updateEvection from '@/components/evectionModule/updateEvection'
import saveAffiche from '@/components/affiche/saveAffiche'
import updateLeave from '@/components/leaveModule/updateLeave'
import updateLeave2 from '@/components/leaveModule/updateLeave2'
import selectEvectionaccount from '@/components/evectionAccountModule/selectEvectionaccount'



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
      path: '/selectAttendance',
      name: 'selectAttendance',
      component: selectAttendance
    },
    {
      path: '/selectOvertim',
      name: 'selectOvertim',
      component: selectOvertim
    },
    {
      path: '/selectEvection',
      name: 'selectEvection',
      component: selectEvection
    },
    {
      path: '/selectLeave',
      name: 'selectLeave',
      component: selectLeave
    },
    {
      path: '/updateLeave',
      name: 'updateLeave',
      component: updateLeave
    },
    {
      path: '/updateLeave2',
      name: 'updateLeave2',
      component: updateLeave2
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
      path: '/selectOvertim',
      name: 'selectOvertim',
      component: selectOvertim
    },
    {
      path: '/createLeave',
      name: 'createLeave',
      component: createLeave
    },
    {
      path: '/selectEvection',
      name: 'selectEvection',
      component: selectEvection
    },
    {
      path: '/updateEvection',
      name: 'updateEvection',
      component: updateEvection
    },
    {
      path: '/selectEvectionaccount',
      name: 'selectEvectionaccount',
      component: selectEvectionaccount
    },
    // {name:'saveTask',path:"/saveTask",component:saveTask},
    // {name:'welcome',path:"/welcome",component:welcome},
  ]
})
