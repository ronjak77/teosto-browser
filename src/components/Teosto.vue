<template>
  <div class="teosto">
    <h1>{{ msg }}</h1>
    <form>
      <div class="row">
        <div class="six columns">
          <label for="exampleInput">Example input</label>
          <input id="exampleInput" type="text" placeholder="Song name" class="u-full-width"/>
        </div>
        <div class="six columns">
          <label for="exampleSelectInput">Select list</label>
          <select id="exampleSelectInput" class="u-full-width">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <label for="exampleMessage">Message</label>
      <textarea id="exampleMessage" placeholder="Large textbox" class="u-full-width"></textarea>
      <label class="example-checkbox">
        <input type="checkbox"/><span class="label-body">Checkbox</span>
      </label>
      <input type="submit" value="Submit" class="button-primary"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Teosto Open API browser'
    }
  }
}
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
