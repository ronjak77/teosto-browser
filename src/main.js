// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import './assets/css/normalize.css'
import './assets/css/skeleton.css'

import songSearch from './components/songsearch'
import venueSearch from './components/venuesearch'
import Venue from './components/venue'
import VenueWorks from './components/venueworks'
/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
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
  { path: '/search', component: songSearch }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
/* eslint-disable */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
    router: router
})
/* eslint-enable */
