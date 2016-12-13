<template lang="html">
    <div class="contenu-single single">
        <div v-for="projet in projets">
            <h1 class="titre-principal">{{ projet.Nom }}</h1>
            <p v-if="projet.URL">
                <a :href="projet.URL" class="bouton external lien-projet" target="_blank">Visiter le site</a>
            </p>
            <div class="contenu" v-html="content"></div>

            <ul class="projet-galerie">
                <li v-for="image in projet.Galerie">
                    <img :src="'/' + image.path" :alt="image.meta.title">
                </li>
            </ul>

            <router-link :to="{ name: 'projets' }">Retour à la liste des projets</router-link>
        </div>
    </div>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'single-projets',
        data () {
            return {
                state: store.state.projets,
                slug: this.$route.params.slug
            }
        },
        computed: {
            projets () { return this.state.projets },
            content () { return this.projets[0].Contenu }
        },
        created () {
            store.specificProjet( this.slug )
        }
    }
</script>
