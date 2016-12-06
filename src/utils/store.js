import Vue from 'vue'

class Store {
    constructor () {
        this.state = {
            etat: false,
            breadcrumbs: false,
            projets: {
                projets: []
            },
            apropos: {
                articles: []
            }
        }
    }

    /* PROJETS */
    fetchProjets () {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.etat = true
            this.state.projets.projets = response.data.entries
            this.state.breadcrumbs = false
        });
    }

    specificProjet ( slug ) {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.etat = true

            this.state.projets.projets = response.data.entries.filter( function($el){
                return $el.Slug === slug
            });

            this.state.breadcrumbs = {
                0: {
                    titre: 'Projets',
                    link: 'projets'
                },
                1: {
                    titre: this.state.projets.projets[0].Nom,
                    link: false
                }
            }
        });
    }

    /* PROJETS */
    fetchApropos () {
        Vue.http.get('/cockpit/api/collections/get/Apropos?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.etat = true
            this.state.apropos.articles = response.data.entries
            this.state.breadcrumbs = {
                0: {
                    titre: 'A propos'
                }
            }
        });
    }
}

let store = new Store ();
export default store;
