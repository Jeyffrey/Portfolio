import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        /* Contact */
        {
            path: '/contact',
            name: 'contact',
            component: require('../components/pages/Contact.vue')
        },
        /* A propos */
        {
            path: '/a-propos',
            name: 'a-propos',
            component: require('../components/pages/A-propos.vue')
        },
        /* Projets */
        {
            path: '/projets/:slug',
            name: 'projet-single',
            component: require('../components/pages/Projet-Single.vue')
        },
        {
            path: '/projets',
            redirect: '/',
        },
        {
            path: '/',
            name: 'projets',
            component: require('../components/pages/Projets-Category.vue')
        }
    ]
})
