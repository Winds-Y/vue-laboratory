import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'testMsg': '原始文本',
    'childText': '子组件原始文本',
    isLogin: false
  },
  getters: {
    isLogin: state => state.isLogin
  },
  mutations: {
    changeTestMsg (state, str) {
      state.testMsg = str
    },
    changeChildText (state, str) {
      state.childText = str
    },
    // 保存登陆状态
    userStatus (state, flag) {
      state.isLogin = flag
    }
  },
  actions: {
    // 获取登陆状态
    userLogin ({ commit }, flag) {
      commit('userStatus', flag)
    }
  }
})
