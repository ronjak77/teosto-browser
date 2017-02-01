<template>
  <div id="app">
    <div class="container">
      <h1>Teosto app</h1>
      <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- <router-link> will be rendered as an `<a>` tag by default -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/venues">Go to Venue search</router-link>
        <router-link to="/search">Go to ba</router-link>
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

</style>
