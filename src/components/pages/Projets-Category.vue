<template lang="html">
    <section id="projets-category">
        <div class="wrapper">
            <h1 class="projets-category--titre-principal">Liste des projets web</h1>
            <article v-for="projet in projets" class="item-projet">
                <router-link v-if="projet.CaseStudy" :to="{ name: 'projet-single', params: { slug: projet.Slug }}">
                    <div class="cell date">
                        <time class="item-projet--date">{{ projet.Année }}</time>
                    </div>

                    <div class="cell titre">
                        <h2 class="item-projet--titre">{{ projet.Nom }}</h2>
                    </div>

                    <div class="cell dev">
                        <ul class="item-projet--dev">
                            <li v-if="projet.Frontend">{{projet.Frontend}}</li>
                            <li v-if="projet.Backend">{{projet.Backend}}</li>
                        </ul>
                    </div>

                    <div class="cell tags">
                        <ul class="item-projet--tags">
                            <li v-for="tag in projet.Tags">{{tag}}</li>
                        </ul>
                    </div>

                    <div class="cell bouton">
                        <router-link :to="{ name: 'projet-single', params: { slug: projet.Slug }}">En savoir plus</router-link>
                    </div>
                </router-link>

                <a v-else :href="projet.URL" target="_blank">
                    <div class="cell date">
                        <time class="item-projet--date">{{ projet.Année }}</time>
                    </div>

                    <div class="cell titre">
                        <h2 class="item-projet--titre">{{ projet.Nom }}</h2>
                    </div>

                    <div class="cell dev">
                        <ul class="item-projet--dev">
                            <li class="front" :class="{on: projet.Frontend}" v-if="projet.Frontend"><span>Front</span></li>
                            <li class="back" :class="{on: projet.Backend}" v-if="projet.Backend"><span>Back</span></li>
                        </ul>
                    </div>

                    <div class="cell tags">
                        <ul class="item-projet--tags">
                            <li v-for="tag in projet.Tags">
                                <span>{{tag}}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="cell bouton">
                        <router-link class="link external" :to="{ name: 'projet-single', params: { slug: projet.Slug }}" title="Visiter le site"></router-link>
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
