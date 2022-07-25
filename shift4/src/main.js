import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"
import { store } from "./store/store"
import { getFirestore } from "firebase/firestore";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA6ZntyHJJ6DF2qIS2MqBFG_wr5sQmtOOU",
  authDomain: "shift4-4009d.firebaseapp.com",
  databaseURL: "https://shift4-4009d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shift4-4009d",
  storageBucket: "shift4-4009d.appspot.com",
  messagingSenderId: "165925142298",
  appId: "1:165925142298:web:c340d092f8c28f02b176a3",
  measurementId: "G-HD9BTPKT8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

new Vue({
  render: h => h(App),
  router,
  store:store
}).$mount('#app')

export default db