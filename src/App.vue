<template>
    <div id="app">
        <p>Chargement a-propos : {{ etat }}</p>
        <pre v-if="etat">{{ state }}</pre>

        <entete></entete>
        <router-view></router-view>
    </div>
</template>


<script>
    import store from './utils/store.js'
    import entete from './components/statics/EnTete.vue'

    export default {
        name: 'app',
        components: { entete },
        data () {
            return {
                state: store.state.apropos,
            }
        },
        computed: {
            etat () {
                return this.state.etat
            }
        },
    }
</script>
