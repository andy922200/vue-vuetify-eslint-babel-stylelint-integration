<template>
    <div class="index">
        <p>This is Index Page</p>
    </div>
</template>

<script>
import {
    lyricsAPIs
} from './../../utils/api'

export default {
    name: 'Index',
    created () {
        this.test()
    },
    methods: {
        async test () {
            try {
                // This is for demo.
                const res = await lyricsAPIs.getASongLyric({
                    artist: 'adele',
                    title: 'hello'
                })
                console.log('res', res)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped lang="scss" src="./styles/Index.scss"></style>
