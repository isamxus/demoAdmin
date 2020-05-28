import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //是否登陆
        IsLogin: false,
        //用户信息
	    UserInfo: null,
        //用户Token
        UserToken: null,
	   //控制左侧菜单是否收缩
        pageNavShrink: false,
        //是否显示左侧菜单
        showMenu: true,
        //全局缓存视图
        keepAliveViews: [],
    },
    mutations: {
        pageNavShrink(state, value){state.pageNavShrink = value},
        navshow_480px(state, value){state.navshow_480px = value},
        showMenu(state, value){state.showMenu = value},
        keepAliveViews(state, value){state.keepAliveViews = value},
        showAdminMenu(state, value){state.showAdminMenu = value},
        UserInfo(state, value){state.UserInfo = value}
    }
})