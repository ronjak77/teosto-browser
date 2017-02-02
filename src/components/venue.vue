<template>
  <div class="venue">
    <template v-if="searchResults !== null">
      <p><strong>{{ searchResults.venue.name }}</strong></p>
      <p>{{ searchResults.venue.place.address.streetAddress }}</p>
      <p>{{ searchResults.venue.place.address.zipCode }} {{ searchResults.venue.place.address.postOffice }}</p>
    </template>
    <div class="row">
      <div class="twelve columns">
        <div id="map"></div>
      </div>
    </div>
    <router-link :to="($route.params.id + '/topWorks')">
      Top Works
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import loadGoogleMapsAPI from 'load-google-maps-api'
export default {
  name: 'venue',

  data () {
    return {
      searchResults: null,
      googleMapsLoaded: false
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData: function (e) {
      var self = this
      var id = this.$route.params.id
      this.$http.get(`http://api.teosto.fi/2015/venue?id=${id}`).then(responseData => {
        self.searchResults = responseData.data
        self.loadMap()
      }, response => {
        console.log(response)
      })
    },
    loadMap: function (e) {
      var self = this
      var allParas = document.getElementsByTagName('script')
      for (var v of allParas) {
        if (v.src.indexOf('googleapis.com/maps-api') > 0) {
          self.googleMapsLoaded = true
        }
      }

      if (self.googleMapsLoaded) {
        self.loadSingleMap(self.searchResults.venue.place.geoCoordinates)
      }

      if (this.googleMapsLoaded === false) {
        loadGoogleMapsAPI({key: 'AIzaSyA1rSIoursUGnFNofPFb8Z2EVdP8J429wg'}).then((googleMaps) => {
          window.googleMaps = googleMaps
          self.loadSingleMap(self.searchResults.venue.place.geoCoordinates)
        }).catch((err) => {
          console.error(err)
        })
      }
    },
    loadSingleMap: function (coords) {
      var googleMaps = window.googleMaps
      var lat = parseFloat(coords.latitude)
      var lng = parseFloat(coords.longitude)

      var location = {lat: lat, lng: lng}
      var map = new googleMaps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
      })
      var marker = new googleMaps.Marker({
        position: location,
        map: map
      })
      marker.setLabel(this.searchResults.venue.place.name)
    }
  }
}
</script>

<style>
#map {
   width: 100%;
   height: 400px;
   background-color: grey;
 }
</style>