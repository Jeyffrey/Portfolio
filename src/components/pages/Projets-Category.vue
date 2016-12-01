<template lang="html">
    <ul id="projets">
        <p>Chargement des projets : {{ etat }}</p>
        <pre v-if="etat">{{ projets }}</pre>

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
    import Store from '../../utils/store.js'
    let store = new Store()

    export default {
        name: 'liste-projets',
        data () {
            return {
                state: store.state,
                slug: this.$route.params.slug
            }
        },
        computed: {
            etat () {
                return store.state.etat
            },
            projets () {
                return store.state.projets
            }
        },
        created () {
            setTimeout( () => {
                store.fecthProjets()
            }, 100)
        },
    }
</script>
