<template>
  <section class="song">
    <button v-on:click="toggleData" class="button-toggle">
      <p>{{ workData.title }} &#9660;</p>
    </button>
    <template v-if="showDetails">
      <template v-if="songDetails">
        <div class="song-details">
          <p v-for="author in songDetails.work.authors"><strong>{{ author.role.title }}:</strong> {{ author.author.firstname }} {{ author.author.lastname }} </p>
          <p>--- played {{ songDetails.work.shows.count }} times</p>
          <button>View where it's been played</button>
          {{ songDetails.work.shows.url }}
          <button>View top municipalities</button>
          {{ songDetails.work.topMunicipalities.url }}
          <button>View top venues</button>
          {{ songDetails.work.topVenues.url }}
        </div>
      </template>
    </template>
  </section>
</template>

<script>
export default {
  name: 'song',

  data () {
    return {
      songDetails: null,
      showDetails: false
    }
  },

  props: ['workData'],

  watch: {
    workData: function (val) {
      this.fetchData()
    }
  },

  methods: {
    toggleData: function (e) {
      if (!this.showDetails && this.songDetails === null) {
        this.fetchData()
      }
      this.showDetails = !this.showDetails
    },
    fetchData: function (e) {
      var self = this
      this.$http.get(this.workData.url).then(responsedata => {
        self.songDetails = responsedata.data
        console.log(self.songDetails)
      }, response => {
        console.log(response)
      })
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


</style>
