<template>
  <div id="app">
    <div class="container">
      <h1><router-link to="/" class="branding">Teosto app</router-link></h1>
      <nav>
        <a><router-link to="/venues">Venue search</router-link></a>
        <a><router-link to="/search">Song search</router-link></a>
        <a><router-link to="/top">Finland top songs</router-link></a>
      </nav>
      <section class="search">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
@import './styles/variables'

nav a
  margin-right 0.5rem
  text-transform uppercase
  text-decoration none
  font-weight 600
  color darken(appcolor, 60%)

nav a:hover
  border-bottom 0.1rem solid darken(appcolor, 60%)

#app
  margin-top 2em

li
  display block

.branding
  text-decoration none
  color darken(appcolor, 60%)

section
  padding-top 1rem

.button-primary
  background-color darken(appcolor, 40%) !important
  border-color darken(appcolor, 40%) !important

</style>
