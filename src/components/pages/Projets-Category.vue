<template lang="html">
    <section id="projets-category">
        <div class="wrapper">
            <article v-for="projet in projets" class="item-projet">
                <div class="item-projet--visuel" v-for="(value, key) in projet.Visuel" v-if="key=='path'">
                    <img :src="value" alt="">
                </div>

                <h3 class="item-projet--titre">{{ projet.Nom }}</h3>

                <ul class="item-projet--tags">
                    <li v-for="tag in projet.Tags">{{tag}}</li>
                </ul>

                <router-link class="item-projet--lien" v-if="projet.CaseStudy" :to="{ name: 'projet-single', params: { slug: projet.Slug }}">En savoir plus</router-link>

                <a class="item-projet--lien external" v-else :href="projet.URL" target="_blank">Visiter le site</a>
            </article>
        </div>
    </section>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'liste-projets',
        data () {
            return {
                state: store.state.projets,
                slug: this.$route.params.slug,
                etat: false
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
        }
    }
</script>
