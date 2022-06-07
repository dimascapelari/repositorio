<template>
  <div>
    <p>Esta é a App.vue</p>
    <comp-servidor />
  </div>
</template>

<script>
import CompServidor from "./components/CompServidor.vue";

export default {
  components: {
    "comp-servidor": CompServidor,
  },
};
</script>

<style>
</style>
