import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: 1
    },
    getters : {
      isLogin(state){
          return state.user!==1
      }
    },
    mutations: {
        updateUserData(state, user){
            state.user = user;
            console.log(state.user)
        }
    }
});