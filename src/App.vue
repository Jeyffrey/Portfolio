<template>
    <div id="app" class="fx" :class="{ready: etat}">
        <entete></entete>

        <!--  ESPACE DEBUGAGE
            <p>Chargement a-propos : {{ etat }}</p>
            <pre v-if="etat">{{ state }}</pre>
        -->

        <main id="main">
            <transition name="skew" mode="out-in" appear>
                <router-view></router-view>
            </transition>
        </main>


        <footer id="footer">
            <p>
                Site développé avec ♥ à l'aide de
                <a href="https://github.com/COCOPi/cockpit/" target="_blank">Cockpit Next</a> <small>(API-first CMS)</small> et
                <a href="https://vuejs.org/" target="_blank">Vue JS</a> <small>(Javascript Framework)</small>
            </p>
            <p>Voir le code source de mon portfolio <a href="https://github.com/Jeyffrey/Portfolio" target="_blank">sur Github</a></p>
            <p>&copy;&nbsp;2016 - Geoffroy Begouaussel - <a href="mailto:jeyffrey@gmail.com">jeyffrey@gmail.com</a></p>
        </footer>
    </div>
</template>


<script>
    import store from './utils/store.js'
    import jump from './utils/smoothscroll.js'
    import entete from './components/statics/EnTete.vue'

    export default {
        name: 'app',
        components: { entete },
        data () {
            return {
                state: store.state
            }
        },
        watch: {
            $route () {
                return this.state.etat = false
            }
        },
        computed: {
            etat () {
                return this.state.etat
            }
        },
        created () {
            this.$router.beforeEach((to, from, next) => {
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop

                if(currentScroll > 0) {
                    jump('#header', {
                        duration: 250,
                        callback: function() {
                            next()
                        }
                    })
                } else {
                    next()
                }
            });
        },
        mounted () {
            console.log('%c Fichiers du site → https://github.com/Jeyffrey/Portfolio ', 'background: #02AAB0; color: #fff; padding: 5px;');
        }
    }
</script>

<style lang="scss">
    @import './scss/main.scss';
</style>
