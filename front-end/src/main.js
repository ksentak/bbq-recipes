import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
