import Vue from 'vue'
import '@/core/mixins'
import App from './App.vue'
import router from './router'

import store from './store/index'
import ApiService from "@/core/services/api.service";

// Vue 3rd party plugins
import "./core/plugins/bootstrap";

ApiService.init();

Vue.config.performance = true
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.dispatch('GENERAL_LIST');
    }
}).$mount('#app')
