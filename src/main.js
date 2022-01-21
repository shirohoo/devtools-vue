import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import axios from "axios";

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://devtools.life';

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
