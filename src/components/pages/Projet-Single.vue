<template lang="html">
    <main id="main">
        <p>Chargement des projets : {{ etat }}</p>
        <pre v-if="etat">{{ projets }}</pre>

        <router-link :to="{ name: 'projets' }">Retour aux projets</router-link>

        <div v-for="projet in projets">
            <h3>{{ projet.Nom }}</h3>
            <p>
                <a :href="projet.URL" target="_blank">Visiter le site</a>
            </p>
            <div class="contenu" v-html="content"></div>
        </div>
    </main>
</template>

<script>
    import Store from '../../utils/store.js'
    let store = new Store()

    export default {
        name: 'single-projets',
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
            },
            content () {
                return this.projets[0].Contenu
            }
        },
        created () {
            setTimeout( () => {
                store.specificProjet( this.slug )
            }, 100)
        },
        methods: {
            nom () {
                this.$emit('lol');
            }
        }
    }
</script>
