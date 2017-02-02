<template>
  <div class="topWorks">
  <template v-if="searchResults !== null">
    <table class="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in searchResults.topWorks">
          <td>{{ result.work.title }}</td>
          <td>{{ result.count }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  </div>
</template>

<script>
export default {
  name: 'venueWorks',

  data () {
    return {
      searchResults: null
    }
  },

  watch: {
    $route: function (to, from) {
      console.log(to, from)
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData: function (e) {
      var self = this
      if (this.searchResults === null) {
        this.$http.get(`http://api.teosto.fi/2015/venue?id=${this.$route.params.id}&method=topWorks`).then(responseData => {
          self.searchResults = responseData.data
        }, response => {
          console.log(response)
        })
      }
    }
  }
}
</script>