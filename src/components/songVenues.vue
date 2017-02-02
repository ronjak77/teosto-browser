<template>
  <div class="songvenues">
    <template v-if="searchResults !== null">
      <p v-for="entry in searchResults.topVenues"><strong>{{ entry.venue.name }}  &ndash; played {{ entry.count }} {{ entry.count == 1 ? 'time' : 'times' }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'songvenues',

  data () {
    return {
      searchResults: null
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData: function (e) {
      var self = this
      var id = this.$route.params.id
      this.$http.get(`http://api.teosto.fi/2015/work?id=${id}&method=topVenues`).then(responseData => {
        self.searchResults = responseData.data
      }, response => {
        console.log(response)
      })
    }
  }
}
</script>