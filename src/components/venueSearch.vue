<template>
  <div class="search">
    <form v-on:submit="fetchData">
      <label for="searchInput">Venue search input</label>
      <input id="searchInput" :value="input" @input="update" type="text" placeholder="Venue name">
      <input type="submit" value="Search" class="button-primary"/>
    </form>
    <template v-if="searchResults !== null">
      <p>{{ searchResults.response_meta.venues }} results found</p>
      <ul>
        <li v-for="venue in searchResults.venues">
          <router-link :to="('/venue/' + venue.id)">
            {{ venue.name }}
          </router-link>
        </li>
      </ul>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'venueSearch',

  data () {
    return {
      input: '',
      searchResults: null
    }
  },

  methods: {
    fetchData: function (e) {
      e.preventDefault()
      var self = this

      this.$http.get(`http://api.teosto.fi/2015/venue?name=${self.input}`).then(responseData => {
        self.searchResults = responseData.data
      }, response => {
        console.log(response)
      })
    },
    update: function (e) {
      this.input = e.target.value
    }
  }
}
</script>