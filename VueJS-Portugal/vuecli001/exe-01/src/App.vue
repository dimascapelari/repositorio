<template>
  <div>
    <button @click="clickNome()">Nome</button>
    <button @click="clickApedido()">Apelido</button>
    <infoPessoa v-bind:infonome="nome" v-bind:infoapelido="apelido" />
  </div>
</template>

<script>
import infoPessoa from "./components/InfoPessoa.vue";

export default {
  components: {
    infoPessoa,
  },
  data: function () {
    return {
      nome: "",
      apelido: "",
    };
  },
  methods: {
    clickNome() {
      this.nome = "Dimas";
    },
    clickApedido() {
      this.apelido = "Capelari";
    },
  },
};
</script>