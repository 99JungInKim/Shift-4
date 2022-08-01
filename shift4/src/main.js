import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Flicking from "@egjs/vue-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
Vue.config.productionTip = false;

Vue.use(Flicking);

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
