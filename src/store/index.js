import Vue from 'vue'
import Vuex from 'vuex'

// partial import from dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(relativeTime, customParseFormat)

// import customized Modules
import authentication from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        today: dayjs(),
        leftNavigationStatus: false,
        windowWidth: 0
    },
    getters: {
        today: state => state.today,
        leftNavigationStatus: state => state.leftNavigationStatus,
        windowWidth: state => state.windowWidth
    },
    mutations: {
        setToday (state, time) {
            state.today = time
        },
        setLeftNavigationStatus (state, status) {
            state.leftNavigationStatus = status
        },
        setWindowWidth (state, value) {
            state.windowWidth = value
        }
    },
    actions: {
        triggerLeftNavigation ({ commit }, status) {
            status
                ? commit('setLeftNavigationStatus', true)
                : commit('setLeftNavigationStatus', false)
        }
    },
    modules: {
        authentication
    }
})
