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

  </div>
</template>

<script>
import loadGoogleMapsAPI from 'load-google-maps-api'
export default {
  name: 'venue',

  data () {
    return {
      searchResults: null,
      googleMaps: null
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData: function (e) {
      var self = this
      var id = this.$route.params.id
      console.log(e)
      this.$http.get(`http://api.teosto.fi/2015/venue?id=${id}`).then(responseData => {
        self.searchResults = responseData.data
        console.log(9999, self.googleMaps)
        self.loadMap()
      }, response => {
        console.log(response)
      })
    },
    loadMap: function (e) {
      console.log('LOADING MAAP')
      if (this.googleMaps === null) {
        loadGoogleMapsAPI({key: 'AIzaSyA1rSIoursUGnFNofPFb8Z2EVdP8J429wg'}).then((googleMaps) => {
          var lat = parseFloat(this.searchResults.venue.place.geoCoordinates.latitude)
          var lng = parseFloat(this.searchResults.venue.place.geoCoordinates.longitude)

          var location = {lat: lat, lng: lng}
          var map = new googleMaps.Map(document.getElementById('map'), {
            zoom: 10,
            center: location
          })
          var marker = new googleMaps.Marker({
            position: location,
            map: map
          })
          console.log(34, marker)
          this.googleMaps = googleMaps
        }).catch((err) => {
          console.error(err)
        })
      }
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