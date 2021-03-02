import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import http from 'utils/http.js'

Vue.config.productionTip = false
Vue.prototype.$api = http
App.mpType = 'app'
Vue.use(uView);
const app = new Vue({
    ...App
})
app.$mount()
