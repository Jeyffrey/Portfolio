<template lang="html">
    <ul id="projets">
        <li v-for="projet in projets">
            <h3>{{ projet.Nom }}</h3>
            <p v-if="projet.CaseStudy">
                <router-link :to="{ name: 'projet-single', params: { slug: projet.Slug }}">En savoir plus</router-link>
            </p>

            <p v-else>
                <a :href="projet.URL" target="_blank">Visiter le site</a>
            </p>

            <div v-for="(value, key) in projet.Visuel" v-if="key=='path'">
                <img :src="value" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'liste-projets',
        data () {
            return {
                state: store.state.projets,
                slug: this.$route.params.slug
            }
        },
        computed: {
            projets () {
                return this.state.projets
            }
        },
        created () {
            setTimeout( () => {
                store.fetchProjets()
            }, 100)
        },
    }
</script>
