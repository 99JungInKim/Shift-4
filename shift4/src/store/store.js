import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: 1
    },
    getters: {
        isLogin(state) {
            return state.user !== 1
        },
        getUserInfo(state) {
            return state.user
        }
    },
    mutations: {
        updateUserData(state, user) {
            state.user = user;
            console.log(state.user)
        },
        setUserInfo(state, payload) {
            state.user = payload
        }
    },
    plugins: [
        createPersistedState()
    ]
});