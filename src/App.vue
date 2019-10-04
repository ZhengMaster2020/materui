<template>
  <div id="app">
    <ms-button
      color="red"
      size="small"
      shape="round"
      icon="ms-icon-edit"
      shade="light"
      @click="sayHello"
    >denglu</ms-button>
    <div>
      <el-button native-type="reset">login</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
