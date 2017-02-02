<template>
  <div class="finland">
    <template v-if="searchResults !== null">
      <h3>Most performed songs in Finland &mdash; {{ year }}</h3>
      <div class="inputgroup">
        <p>Choose year:</p>
        <input type="radio" id="2015" value="2015" v-model="year">
        <label for="2015">2015</label>
        <input type="radio" id="2014" value="2014" v-model="year">
        <label for="2014">2014</label>
      </div>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Placement</th>
            <th>Song title</th>
            <th>Play count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry, index in searchResults.topWorks">
            <td>{{ index+1 }}</td>
            <td>{{ entry.work.title }}</td>
            <td>{{ entry.count }}</td>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Finland',

  data () {
    return {
      searchResults: null,
      year: 2015
    }
  },

  mounted () {
    this.fetchData()
  },

  watch: {
    year: function (val) {
      this.fetchData()
    }
  },

  methods: {
    fetchData: function (e) {
      var self = this
      this.$http.get(`http://api.teosto.fi/${this.year}/finland?method=topWorks`).then(responseData => {
        self.searchResults = responseData.data
      }, response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.inputgroup
  padding-top 1rem
  padding-bottom 1rem
  border solid grey
  border-width 1px 0 1px 0

.inputgroup input, .inputgroup label
  display inline
  margin-right 1rem
  font-size 2.5rem

.inputgroup label:hover
  color desaturate(appcolor, 40%)

.inputgroup p
  margin-bottom 0.5rem

input[type="radio"]
  display none

input[type="radio"]:checked + label
  border-bottom 1px solid darken(appcolor, 40%)
  color darken(appcolor, 40%)

</style>