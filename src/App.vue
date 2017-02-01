<template>
  <div class="container">
    <div id="app">
      <img src="./assets/logo.png"/>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>