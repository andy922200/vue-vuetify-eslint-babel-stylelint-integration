// css polyfill for IE11
import cssVars from 'css-vars-ponyfill'
cssVars()

// packages
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import customised Vuetify
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
