import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAgile from 'vue-agile'
Vue.config.productionTip = false;
Vue.use(VueAgile)
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
