import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        User: {}
    },
    mutations: {
        pushUser(state, user){
            this.state.User=user;
        }
    }
});