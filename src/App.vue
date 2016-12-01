<template>
    <div id="app">
        <entete></entete>
        <router-view></router-view>
    </div>
</template>


<script>
    import entete from './components/statics/EnTete.vue'

    export default {
        name: 'app',
        components: { entete },
        mounted () {
            console.log(this)
        }
    }
</script>
