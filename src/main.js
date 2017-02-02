// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import songSearch from './components/songsearch'
import venueSearch from './components/venuesearch'
import Venue from './components/venue'
import Work from './components/work'
import Finland from './components/finland'
import VenueWorks from './components/venueworks'
import songVenues from './components/songvenues'

import './assets/css/normalize.css'
import './assets/css/skeleton.css'
/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/venues', component: venueSearch },
  { path: '/venue/:id',
    component: Venue,
    children: [
      {
        path: 'topworks',
        component: VenueWorks
      }
    ]
  },
  { path: '/search', component: songSearch },
  { path: '/work/:id',
    component: Work,
    children: [
      {
        path: 'topvenues',
        component: songVenues
      }
    ]
  },
  { path: '/top', component: Finland }
]

const router = new VueRouter({
  routes
})

/* eslint-disable */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
    router: router
})
/* eslint-enable */
