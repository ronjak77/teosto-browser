<template>
  <div id="app">
    <div class="container">
      <div class="row"><img src="./assets/logo.png"/>
        <teosto></teosto>
      </div>
    </div>
  </div>
</template>

<script>
import Teosto from './components/Teosto'

export default {
  name: 'app',
  components: {
    Teosto
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>