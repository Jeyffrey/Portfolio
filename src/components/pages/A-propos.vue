<template lang="html">
    <div class="single wrapper">
        <h1 class="titre-principal">À propos</h1>
        <div v-if="articles" class="contenu" v-html="content"></div>
    </div>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'aprop-single',
        data () {
            return {
                state: store.state.apropos,
                slug: this.$route.params.slug
            }
        },
        computed: {
            articles () { return this.state.articles[0] },
            content () { return this.articles.Contenu }
        },
        created () {
            store.fetchApropos( this.slug )
        }
    }
</script>
