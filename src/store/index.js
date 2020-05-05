import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//何辉 人事管理
import login from './login'
//谢海鸿 任务管理
import task from './task'

import plan from './plan'
//龙珊 薪资管理
import wage from './wage'
//周怡珊 考勤管理
//陈良吉 公告管理



import getters from './getters'
import axios from 'axios'
import ElementUI from 'element-ui';

export default new Vuex.Store({
    getters,
state:{
    ElementUI,
    axios,
    returnMessage:"",
    app_view:sessionStorage.getItem("app_view")||'login',
    elMain:"welcome",
},
modules:{
'login':login,
'task':task,
'plan':plan,
'wage':wage
},

})