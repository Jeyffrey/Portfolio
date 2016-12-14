<template lang="html">
    <section id="projets-category" class="wrapper">
        <h1 class="titre-principal">Liste des projets web</h1>
        <div class="table">
            <article v-for="projet in projets" class="item-projet">
                <router-link v-if="projet.CaseStudy" :to="{ name: 'projet-single', params: { slug: projet.Slug }}">
                    <div class="cell date">
                        <time class="item-projet--date">{{ projet.Année }}</time>
                    </div>

                    <div class="cell titre">
                        <h2 class="item-projet--titre">{{ projet.Nom }}</h2>
                    </div>

                    <div class="cell tags">
                        <ul class="item-projet--dev">
                            <li class="front" :class="{on: projet.Frontend}" v-if="projet.Frontend"><span>Front</span></li>
                            <li class="back" :class="{on: projet.Backend}" v-if="projet.Backend"><span>Back</span></li>
                        </ul>
                        <ul class="item-projet--tags">
                            <li v-for="tag in projet.Tags">
                                <span>{{tag}}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="cell bouton">
                        <router-link class="link suite" :to="{ name: 'projet-single', params: { slug: projet.Slug }}"></router-link>
                    </div>
                </router-link>

                <a v-else :href="projet.URL" target="_blank">
                    <div class="cell date">
                        <time class="item-projet--date">{{ projet.Année }}</time>
                    </div>

                    <div class="cell titre">
                        <h2 class="item-projet--titre">{{ projet.Nom }}</h2>
                    </div>

                    <div class="cell tags">
                        <ul class="item-projet--dev">
                            <li class="front" :class="{on: projet.Frontend}" v-if="projet.Frontend"><span>Front</span></li>
                            <li class="back" :class="{on: projet.Backend}" v-if="projet.Backend"><span>Back</span></li>
                        </ul>
                        <ul class="item-projet--tags">
                            <li v-for="tag in projet.Tags">
                                <span>{{tag}}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="cell bouton">
                        <a class="link external" :href="projet.URL"></a>
                    </div>
                </a>
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
