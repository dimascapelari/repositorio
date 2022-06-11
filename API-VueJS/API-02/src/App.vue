<template>
  <div>
    <ul v-for="profissional in profissionais" :key="profissional.id">
      <li>ID: {{ profissional.id }}</li>
      <li>Nome: {{ profissional.nome }}</li>
      <li>CPF: {{ profissional.cpf }}</li>
      <li>Cidade: {{ profissional.cidadeId }}</li>
      <li>Especialidade: {{ profissional.especialidadeId }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      profissionais: [],
    };
  },
  async mounted() {
    const resp = await fetch(
      "https://api-teste-front-end-fc.herokuapp.com/profissionais"
    );
    const response = await resp.json();
    this.profissionais = response;
  },
};
</script>

<style>
</style>