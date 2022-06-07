<template>
  <div>
    <h3>App component</h3>
    <app-servidor />
  </div>
</template>

<script>
import Servidor from "./CompServidor.vue";

export default {
  components: {
    "app-servidor": Servidor,
  },
};
</script>

<style>
</style>
