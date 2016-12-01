import Vue from 'vue'

export default class Store {
    constructor () {
        this.state = {
            etat: false,
            projets: []
        }
    }

    fecthProjets () {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.etat = true
            this.state.projets = response.data.entries
        });
    }

    specificProjet ( slug ) {
        Vue.http.get('/cockpit/api/collections/get/Projets?token=6a20e85e541cfa4e3b516ea4bfe5af').then((response) => {
            this.state.etat = true
            this.state.projets = response.data.entries.filter( function($el){
                return $el.Slug === slug
            });
        });
    }
}
