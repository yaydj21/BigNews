import Vue from 'vue'
import Vuex from 'vuex'

// 导入获取用户信息的API
import { getUserInfoAPI } from '@/api/userAPI';

Vue.use(Vuex)

let initState = {
    tokenInfo:{
    },
    userInfo:{

    },
}

const stateStr = localStorage.getItem('state');
// 如果本地有token 则给赋值initState初值
if(stateStr){
    initState = JSON.parse(stateStr);
}

export default new Vuex.Store({
    state: initState,
    mutations: {
        // 更新Token的方法
        updateTokenInfo(state, token) {
            state.tokenInfo.token = token;
            this.commit('saveStateToStorage');
        },
        uodateUserInfo(state,info){
            state.userInfo = info;
            this.commit('saveStateToStorage');
        },
        cleanState(state){
            state.tokenInfo = {};
            state.userInfo = {};
            this.commit('saveStateToStorage');
        },
        // 把token储存到本地
        saveStateToStorage(state){
            localStorage.setItem('state',JSON.stringify(state));
        }
    },

    actions: {
        // 初始化用户信息
        async initUserInfo(context){
            const { data : res } = await getUserInfoAPI(this.state.tokenInfo.token);
            if(res.status === 0){
                context.commit('uodateUserInfo',res.data);
            }
        }
    },
    getters: {

    },
    modules: {
    }
})
