<template>
    <div id="app">
        <p>Chargement a-propos : {{ etat }}</p>
        <!-- <pre v-if="etat">{{ state }}</pre> -->

        <entete></entete>

        <main id="main">

            <transition name="fade" mode="out-in" appear>
                <router-view></router-view>
            </transition>

        </main>
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
                state: store.state.projets,
            }
        },
        computed: {
            etat () {
                return this.state.etat
            }
        },
    }
</script>

<style lang="scss">
    @import './scss/main.scss';
</style>
