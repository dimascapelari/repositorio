<template>
  <div class="container mt-3 box">
    <div class="row">
      <div class="col-12 p-4">
        <p>Mecanismo para alterar o valor do nome.</p>
        <button @click="alterarNome">Alterar nome</button>
        <CompDetalhe v-bind:meunome="onomeoriginal" />
      </div>
    </div>
  </div>
</template>

<script>
import CompDetalhe from "./components/CompDetalhe.vue";

export default {
  components: {
    CompDetalhe,
  },
  data: function () {
    return {
      onomeoriginal: "Dimas",
    };
  },
  methods: {
    alterarNome() {
      this.onomeoriginal = "Capelari";
    },
  },
};
</script>

<style scoped>
.box {
  border: 2px solid black;
  background-color: rgb(200, 200, 200);
}
</style>
