import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

Vue.config.productionTip = false;

Vue.use(Flicking);

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
