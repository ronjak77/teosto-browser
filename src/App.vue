<template>
  <div class="container">
    <div id="app">
      <section class="center">
        <h1>Song search</h1>
        <div class="row">
          <div class="twelve columns">
            <form v-on:submit="fetchData">

              <label for="searchInput">Song search input</label>
              <input id="searchInput" :value="input" @input="update" type="text" placeholder="Song name">
              <input type="submit" value="Search" class="button-primary"/>

            </form>
          </div>
        </div>
      </section>

      <template v-if="searchResults">
        <h3>{{ searchResults.response_meta.works }} {{ searchResults.response_meta.works == 1 ? 'title' : 'titles' }} found </h3>
        <ul>
          <li v-for="work in searchResults.works">
            <song :workData="work"></song>
          </li>
        </ul>
      </template>

    </div>
  </div>
</template>

<script>
import song from './components/song'
export default {
  name: 'app',
  components: {
    song
  },

  data () {
    return {
      searchResults: null,
      input: ''
    }
  },

  methods: {
    fetchData: function (e) {
      e.preventDefault()
      var self = this

      this.$http.get(`http://api.teosto.fi/2015/work?title=${self.input}`).then(responseData => {
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

<style lang="stylus">
@import './styles/variables'

li
  display block
  margin 0.8rem 0

a
  color #42b983

.center
  text-align center

#app
  color #2c3e50
  margin-top 60px

</style>