<template>
  <div id="teosto">
    <h1>Song search</h1>
    <h3>{{ input }}</h3>

    <template v-if="searchResults">
      <ul>
        <li v-for="work in searchResults.works">
          <a :href="work.url" target="_blank">{{ work.title }}</a>
        </li>
      </ul>
    </template>

    <form v-on:submit="fetchData">
      <label for="searchInput">Song search input</label>
      <input id="searchInput" :value="input" @input="update" type="text" placeholder="Song name" class="u-full-width"/>
      <input type="submit" value="Search" class="button-primary"/>
    </form>

  </div>
</template>

<script>
/*eslint-disable */

var apiURL = 'http://api.teosto.fi/2015/work?title='

export default {
  name: 'teosto',

  data() {
    return {
      searchResults: null,
      input: ''
    }
  },

  methods: {
    fetchData: function (e) {
      e.preventDefault()
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.input)
      xhr.onload = function () {
        console.log(xhr)
        self.searchResults = JSON.parse(xhr.response)
        console.log(self.works)
      }
      xhr.send()
    },
    update: function (e) {
      this.input = e.target.value
    }
  }
}

/*eslint-enable */
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight 400
  color emerald

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
