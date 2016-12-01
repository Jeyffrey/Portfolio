<template lang="html">
    <header id="header">
        HEADER
    </header>
</template>

<script>
    import Store from '../../utils/store.js'

    export default {
        name: 'entete',
        watch: {
            $route (route) {
                this.breadcrumbs(route)
            }
        },
        created () {
            this.breadcrumbs(this.$route)

            console.log( Store )
        },
        methods: {
            breadcrumbs ($route) {
                console.log($route)

                if( $route.name === 'projet-single' ) {
                    console.log( $route.params.nom )
                }
            }
        }
    }
</script>
