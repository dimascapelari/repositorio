<template>
  <div id="app">
    <p>Este é o componente App</p>
    <CompNovo />
  </div>
</template>

<script>
import CompNovo from "./components/CompNovo.vue";

export default {
  name: "App",
  components: {
    CompNovo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
