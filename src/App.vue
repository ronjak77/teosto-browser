<template>
  <div id="app">
    <div class="container">
      <h1><router-link to="/" class="branding">Teosto app</router-link></h1>
      <p>
        <router-link to="/venues">Venue search</router-link>
        <router-link to="/search">Song search</router-link>
        <router-link to="/foo">Municipality search</router-link>
      </p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
@import './styles/variables'

#app
  margin-top 2em

li
  display block

.branding
  text-decoration none
  color darken(appcolor, 60%)
</style>
