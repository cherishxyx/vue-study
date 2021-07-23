import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    users: []
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    },
    addUser (state, value) {
      state.users.push(value)
    }
  },
  actions: {
  },
  modules: {
  }
})
