<template lang="html">
    <header id="header">
        <div class="header--breadcrumbs">
            <div class="header--titre-site">
                <h1>
                    <router-link v-if="breadcrumbs" :to="{ name: 'projets' }">Jeyffrey</router-link>
                    <span v-else>Jeyffrey</span>
                </h1>
            </div>

            <transition name="breadcrumbs" mode="out-in" appear>
                <ol v-if="breadcrumbs">
                    <li class="list-complete-item" v-for="(item, index) in breadcrumbs" key="{{item.titre}}">
                        <router-link
                        v-if="item.link"
                        :to="{ name: item.link }">{{item.titre}}</router-link>
                        <span
                        v-else>{{item.titre}}</span>
                    </li>
                </ol>
            </transition>
        </div>

        <div class="header--menu">
            <ul>
                <li class="header--menu-item projets">
                    <router-link :to="{ name: 'projets' }" exact>Projets</router-link>
                </li>
                <li class="header--menu-item">
                    <router-link :to="{ name: 'a-propos' }" exact>À propos</router-link>
                </li>
                <li class="header--menu-item">
                    <a href="mailto:jeyffrey@gmail.com">Contact</a>
                </li>
                <li class="header--menu-item twitter">
                    <a href="https://twitter.com/Jeyffrey" target="_blank"></a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'entete',
        data () {
            return {
                state: store.state
            }
        },
        computed: {
            breadcrumbs () {
                return this.state.breadcrumbs
            },
        }
    }
</script>
