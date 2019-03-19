<template lang="html">
    <header id="header">
        <div class="header--breadcrumbs">
            <div class="header--titre-site">
                <router-link :to="{ name: 'projets' }">Geoffroy B.</router-link>
            </div>

            <transition name="breadcrumbs" mode="out-in" appear>
                <ol v-if="breadcrumbs">
                    <li class="list-complete-item" v-for="(item, index) in breadcrumbs">
                        <router-link
                        v-if="item.link"
                        :to="{ name: item.link }">{{item.titre}}</router-link>
                        <span
                        v-else>{{item.titre}}</span>
                    </li>
                </ol>
            </transition>
        </div>

        <div class="header--menu">
            <ul>
                <li class="header--menu-item projets">
                    <router-link :to="{ name: 'projets' }" exact>Projets</router-link>
                </li>
                <li class="header--menu-item">
                    <router-link :to="{ name: 'a-propos' }" exact>À propos</router-link>
                </li>
                <li class="header--menu-item">
                    <a href="mailto:jeyffrey@gmail.com">Contact</a>
                </li>
                <li class="header--menu-item twitter">
                    <a href="https://twitter.com/Jeyffrey" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xml:space="preserve">
							<g>
								<path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
										c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
										c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
										c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
										c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
										c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
										c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
							</g>
						</svg>
					</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import store from '../../utils/store.js'

    export default {
        name: 'entete',
        data () {
            return {
                state: store.state
            }
        },
        computed: {
            breadcrumbs () {
                return this.state.breadcrumbs
            }
        }
    }
</script>
