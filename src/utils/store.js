import Vue from 'vue'

class Store {
    constructor () {
        this.state = {
            projets: {
                etat: false,
                breadcrumbs: false,
                projets: []
            },
            apropos: {
                etat: false,
                breadcrumbs: false,
                articles: []
            }
        }
    }

    /* PROJETS */
    fetchProjets () {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.projets.etat = true
            this.state.projets.projets = response.data.entries
            this.state.projets.breadcrumbs = false
        });
    }

    specificProjet ( slug ) {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.projets.etat = true

            this.state.projets.projets = response.data.entries.filter( function($el){
                return $el.Slug === slug
            });

            this.state.projets.breadcrumbs = {
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
            this.state.apropos.etat = true
            this.state.apropos.articles = response.data.entries
            this.state.apropos.breadcrumbs = false
        });
    }
}

let store = new Store ();
export default store;
