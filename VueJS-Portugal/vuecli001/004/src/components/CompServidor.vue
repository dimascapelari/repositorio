<template>
  <div>
    <h5>Dados do servidor</h5>
    <hr />
    <servidor-estado />
    <servodor-temperatura />
  </div>
</template>

<script>
import ServidorEstado from "./ServidorEstado.vue";
import ServidorTemperatura from "./ServidorTemperatura.vue";

export default {
  components: {
    "servidor-estado": ServidorEstado,
    "servodor-temperatura": ServidorTemperatura,
  },
};
</script>