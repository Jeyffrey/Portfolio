<template lang="html">
    <main id="main" class="contenu-single single">
        <div v-for="projet in projets">
            <h1>{{ projet.Nom }}</h1>
            <p>
                <a :href="projet.URL" class="bouton external" target="_blank">Visiter le site</a>
            </p>
            <div class="contenu" v-html="content"></div>
        </div>
    </main>
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
            setTimeout( () => {
                store.specificProjet( this.slug )
            }, 100)
        }
    }
</script>
