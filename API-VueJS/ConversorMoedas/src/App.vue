<template>
  <div id="app">
    <CompConversor moedaA="USD" moedaB="BRL" />
  </div>
</template>

<script>
import CompConversor from "./components/CompConversor.vue";

export default {
  name: "App",
  components: {
    CompConversor,
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
