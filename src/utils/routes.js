import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/projets/:slug',
        name: 'projet-single',
        component: require('../components/pages/Projet-Single.vue')
    },
    {
        path: '/',
        name: 'projets',
        component: require('../components/pages/Projets-Category.vue')
    }
  ]
})
