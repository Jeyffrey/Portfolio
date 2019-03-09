<template lang="html">
    <div class="single wrapper">
        <h1 class="titre-principal">À propos</h1>
        <div v-if="content" class="contenu" v-html="content"></div>
    </div>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'aprop-single',
        data () {
            return {
                state: store.state.aboutpage,
                slug: this.$route.params.slug
            }
        },
        computed: {
            content () { return this.state.Contenu }
        },
        created () {
            store.fetchApropos( this.slug )
        }
    }
</script>
