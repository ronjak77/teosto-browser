<template>
  <div id="teosto">
    <h1>Song search</h1>

    <div class="row">
      <div class="twelve columns">
        <form v-on:submit="fetchData">
          <label for="searchInput">Song search input</label>
          <input id="searchInput" :value="input" @input="update" type="text" placeholder="Song name" class="u-full-width"/>
          <input type="submit" value="Search" class="button-primary"/>
        </form>
      </div>
    </div>


    <template v-if="searchResults">
      <h3>{{ searchResults.response_meta.works }} {{ searchResults.response_meta.works == 1 ? 'title' : 'titles' }} found </h3>
      <ul>
        <li v-for="work in searchResults.works">
          <a :href="work.url" target="_blank">{{ work.title }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'teosto',

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

      this.$http.get(`http://api.teosto.fi/2015/work?title=${self.input}`).then(responsedata => {
        self.searchResults = responsedata.data
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

<style lang="stylus" scoped>

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
