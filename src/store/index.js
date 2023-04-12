import { reqLogin } from "@/api/index";
import { Message } from "element-ui";
import jwt from "jwt-decode";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  // 开启命名空间，模块独立
  namespaced: true,
  state: {
    userinfo: {
      username: (
        localStorage.getItem('userinfo') &&
        JSON.parse(localStorage.getItem('userinfo')).username) || "",
      token: (
        localStorage.getItem('useinfo') && 
        JSON.parse(localStorage.getItem('useinfo')).token) || '',
    },
  },
  /**
   * 清空
   */
  mutations: {
    SETUSERINFO(state, payload) {
      state.userinfo = payload;
    },
    CLEARUSER(state) {
      state.userinfo = {
        username: "",
        token: "",
      };
      localStorage.removeItem('userinfo')
    },
  },
  actions: {
    async toLogin({ commit }, params) {
      try {
        const res = await reqLogin(params);
        if (res.status == 200) {
          let userinfo = {
            username: jwt(res.data).username,
            token: res.data,
          };
          Message.success('登陆成功');
          // 存数据
          commit("SETUSERINFO", userinfo);
          // 数据持久化
          localStorage.setItem("userinfo", JSON.stringify(userinfo));
        } else {
          Message.error('登陆失败，请检查账号或密码');
        }
      } catch (error) {
        console.log('出了些小问题');
      }
    },
  },
  getters: {},
});
