import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  count:10
};

const mutations = {
  increment(state){
    state.count++;
  },
  decrement(state){
    state.count--;
  }
};

const actions = {
  increment:({commit})=>{commit('increment')},
  decrement:({commit})=>{commit('decrement')},
  clickEven:({commit, state})=>{
    if(state.count%2==0){
      commit('increment')
    }
  },
  clickAsync:({commit, state})=>{
    return new Promise((resolve)=>{
      setTimeout(function(){
        commit('increment');
        resolve();
      },1000);
    });
  }
};

const getters={
  evenOrOdd:(state)=>{
    return state.count%2?'奇数':'偶数'
  }
};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})