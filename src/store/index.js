import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import login from './login'
//谢海鸿 任务管理
import task from './task'
import task from './plan'
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
},

})