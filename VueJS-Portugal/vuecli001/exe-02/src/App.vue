<template>
  <div>
    <button @click="executar(0)" class="btn btn-primary m-1">Click 0</button>
    <button @click="executar(100)" class="btn btn-primary m-1">
      Click 100
    </button>
    <button @click="executar(200)" class="btn btn-primary m-1">
      Click 200
    </button>

    <CompoNente :meuvalor="valor" />
  </div>
</template>

<script>
import CompoNente from "./components/CompoNente.vue";

export default {
  components: {
    CompoNente,
  },
  data: function () {
    return {
      valor: 0,
    };
  },
  methods: {
    executar(recebeValor) {
      this.valor = recebeValor;
      console.log(this.valor);
    },
  },
};
</script>