<template>
  <div>
    <p>componente principal</p>

    <CompoNente :valor1="nome" />
  </div>
</template>

<script>
import CompoNente from "./components/CompoNente.vue";

export default {
  data: function () {
    return {
      nome: "Dimas",
    };
  },
  components: {
    CompoNente,
  },
};
</script>