<template lang="html">
    <header id="header">
        <h1>Jeyffrey</h1>
        <ul class="breadcrumbs" v-if="breadcrumbs" v-for="item in breadcrumbs">
            <li>
                <router-link
                     v-if="item.link"
                     :to="{ name: item.link }">{{item.titre}}</router-link>
                <span
                    v-else>{{item.titre}}</span>
            </li>
        </ul>
    </header>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'entete',
        data () {
            return {
                state: store.state.projets
            }
        },
        computed: {
            breadcrumbs () {
                return this.state.breadcrumbs
            },
        },
        watch: {
            page () {
                console.log(this.page)
            }
        },
        mounted () {
            console.log(this.$route)
        }
    }
</script>
