import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import service from "./http"
import dayjs from 'dayjs'
import lodash from "lodash"

Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.prototype.$lodash = lodash;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')