import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import zhHant from 'vuetify/lib/locale/zh-Hant'

// css & fonts
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: {
            zhHant
        },
        current: 'zhHant'
    },
    icons: {
        iconfont: ['mdi']
    }
})
