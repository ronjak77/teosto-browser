<template>
  <section>
    <div class="work">
      <template v-if="searchResults !== null">
        <p><strong>{{ searchResults.work.title }}</strong></p>

        <div class="song-details">
          <table class="u-full-width">
            <thead>
              <tr>
                <th>Role</th>
                <th>Author first name</th>
                <th>Author surname</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="author in searchResults.work.authors">
                <td><strong>{{ author.role.title }}</strong></td>
                <td>{{ author.author.firstname }}</td>
                <td>{{ author.author.lastname }}</td>
              </tr>
            </tbody>
          </table>
          <h5>Play times: {{ searchResults.work.shows.count }} in 2015.</h5>
          <router-link :to="('/work/' + searchResults.work.id + '/topvenues')"><button>View top venues</button></router-link>
        </div>
      </template>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'work',

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
      this.$http.get(`http://api.teosto.fi/2015/work?id=${id}`).then(responseData => {
        self.searchResults = responseData.data
      }, response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>