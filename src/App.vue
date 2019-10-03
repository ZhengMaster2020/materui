<template>
  <div id="app">
    <ms-button
      color="red"
      size="mini"
      shape="round"
      icon="ms-icon-edit"
      shade="light"
      @click="sayHello"
    >456</ms-button>
  </div>
</template>

<script>
import MsButton from './packages/button/src/button.vue'

export default {
  name: 'App',
  components: {
    MsButton
  },

  methods: {
    sayHello() {
      window.alert('oo')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
