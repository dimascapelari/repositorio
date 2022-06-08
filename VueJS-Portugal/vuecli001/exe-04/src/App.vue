<template>
  <div>
    <p>(App.vue) Nome = {{ nome }}</p>
    <button @click="alterar()">Alterar</button>
    <hr />
    <CompoNente :meunome="nome" @nomeAlterado="nome = $event" />
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
  methods: {
    alterar() {
      this.nome = "Capelari";
    },
  },
};
</script>