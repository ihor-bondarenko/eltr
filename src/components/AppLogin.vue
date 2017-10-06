<template>
  <div class="jumbotron"></div>
</template>

<script>
import { EventBus } from '../helpers/event-bus.js'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Trainer Login'
    }
  },
  mounted: function () {
    console.log('hello login module')
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.print-button {
  font-size: 48dp;
}

.print-button:hover {
  cursor: pointer;
}
</style>
