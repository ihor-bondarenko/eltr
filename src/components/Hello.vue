<template>
  <div class="jumbotron">
    <h1>{{ msg }}</h1>
      <label for="printerList">Printer</label>
      <select class="custom-select" id="printerList" v-model="selectedPrinter">
        <option selected>-</option>
        <option v-for="printer in listPrinters" v-bind:value="printer.name">{{ printer.name }}</option>
      </select>
      <i class="material-icons md-48 print-button" v-on:click="printAction">print</i>
  </div>
</template>

<script>
import { EventBus } from '../helpers/event-bus.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Trainer',
      selectedPrinter: ''
    }
  },
  mounted: function () {
    console.log('hello module')
  },
  computed: {
    listPrinters () {
      return this.$store.state.printers
    }
  },
  methods: {
    printAction () {
      EventBus.$emit('test', this.selectedPrinter)
    }
  }
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
