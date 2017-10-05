<template>
  <div id="app">
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Trainer</a>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { EventBus } from './helpers/event-bus.js'

export default {
  name: 'app',
  data: {
    printers: []
  },
  mounted: function () {
    EventBus.$on('test', function (printer) {
        console.log(printer)
    })
  },
  computed: {}
}
</script>

<style lang="sass">
@import './style/app.css'

</style>
