import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    set_cart_list(state,data){
      state.cartList = data
    },
    set_cart_item_checked(state,idx){
      state.cartList[idx].checked =  !state.cartList[idx].checked;
    }
  },
  actions: {
  },
  modules: {
  }
})
