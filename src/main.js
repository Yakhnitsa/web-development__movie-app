import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'

const apiKey = process.env.VUE_APP_OMDb_API_KEY
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=' + apiKey + '&page=1&type=movie&Content-Type=application/json'

Vue.config.productionTip = false

new Vue({
  vuetify,
    router,
  render: h => h(App)
}).$mount('#app');
