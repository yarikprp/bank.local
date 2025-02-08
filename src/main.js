import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app"; 
import "./theme.css";

const firebaseConfig = {
  apiKey: "AIzaSyDZ-bx8Jn-Ij6VFQ0liLeLvkRsfQNlZDpg",
  authDomain: "bank-online-24fd4.firebaseapp.com",
  projectId: "bank-online-24fd4",
  storageBucket: "bank-online-24fd4.appspot.com", 
  messagingSenderId: "639720065545",
  appId: "1:639720065545:web:1d5f475d2e7bcb33acc6d8",
  measurementId: "G-D3DN04VWKV",
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
