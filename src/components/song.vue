<template>
  <section class="song">
    <button v-on:click="fetchSong" class="button-toggle">
      <p>{{ workData.title }} &#9660;</p>
    </button>

    <template v-if="songDetails !== null">

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
            <tr v-for="author in songDetails.work.authors">
              <td><strong>{{ author.role.title }}</strong></td>
              <td>{{ author.author.firstname }}</td>
              <td>{{ author.author.lastname }}</td>
          </tbody>
        </table>

        <h5>Play times: {{ songDetails.work.shows.count }} in 2015.</h5>
        <button v-on:click="loadMore(songDetails.work.shows.url)">View where it's been played</button>
        <template v-if="showDetails !== null">
          <ul>
            <li v-for="show in showDetails.shows">{{ show.event.name }} on {{ show.event.startDate }} - {{ show.event.endDate }}</li>
          </ul>
        </template>

        <router-link :to="('/work/' + songDetails.work.id + '/topvenues')"><button>View top venues</button></router-link>
      </div>

    </template>
  </section>
</template>

<script>
export default {
  name: 'song',

  data () {
    return {
      songDetails: null,
      showDetails: null
    }
  },

  props: ['workData'],

  watch: {
    workData: function (val) {
      this.songDetails = null
      this.fetchSong()
    }
  },

  methods: {
    fetchSong: function (e) {
      if (this.songDetails === null) {
        var self = this
        this.$http.get(this.workData.url).then(responsedata => {
          self.songDetails = responsedata.data
          self.songDetails.display = true
          console.log(self.songDetails)
        }, response => {
          console.log('There was a problem contacting the API')
        })
      }
    },
    loadMore: function (loadurl) {
      if (this.showDetails === null) {
        var self = this
        this.$http.get(loadurl).then(responsedata => {
          self.showDetails = responsedata.data
          console.log(self.showDetails)
        }, response => {
          console.log('There was a problem contacting the API')
        })
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../styles/variables'

.button-toggle
  padding-left 1em
  padding-right 1em
  font-size: 1.5rem
  background-color desaturate(appcolor, 40%)
  border-color desaturate(appcolor, 40%)
  color white
  width 100%
  text-align left

.button-toggle p
  overflow hidden
  text-overflow ellipsis

.song-details p
  padding-left 2em
  margin-bottom 1em

.song-details a
  text-decoration none
  color #555
</style>
