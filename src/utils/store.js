import Vue from 'vue'

class Store {
    constructor () {
        this.state = {
            etat: false,
            breadcrumbs: false,
            projets: {
                projets: []
            },
            aboutpage: null
        }
    }

    /* PROJETS */
    fetchProjets () {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.projets.projets = response.data.entries
            this.state.etat = true
            this.state.breadcrumbs = false
        });
    }

    specificProjet ( slug ) {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {

            this.state.projets.projets = response.data.entries.filter( function($el){
                return $el.Slug === slug
            });

            this.state.etat = true

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
		Vue.http.get('/cockpit/api/singletons/get/About?token=6a20e85e541cfa4e3b516ea4bfe5af')
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.state.etat = true
				this.state.aboutpage = response
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
