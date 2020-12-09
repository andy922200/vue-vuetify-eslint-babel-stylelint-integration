<template>
    <div id="app">
        <v-app id="vuefify-app">
            <v-container fluid>
                <div class="app__wrapper">
                    <Navbar />
                    <Navigation />
                    <router-view />
                </div>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import Navbar from './generalComponents/Navbar'
import Navigation from './generalComponents/Navigation'
import {
    mapGetters, mapMutations
} from 'vuex'

export default {
    name: 'App',
    components: {
        Navbar,
        Navigation
    },
    created () {
        this.setWindowWidth(window.innerWidth)
        window.addEventListener('resize', this.activateWidthTrigger)
    },

    destroyed () {
        window.removeEventListener('resize', this.activateWidthTrigger)
    },

    computed: {
        ...mapGetters(['today', 'leftNavigationStatus', 'windowWidth'])
    },

    methods: {
        ...mapMutations(['setWindowWidth']),

        activateWidthTrigger () {
            this.setWindowWidth(window.innerWidth)
        }
    }
}
</script>

<style lang="scss" src="./styles/App.scss"></style>
