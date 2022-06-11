<template>
  <div>
    <ul v-for="produto in produtos" :key="produto.id">
      <li>{{ produto.nome }}</li>
      <li>{{ produto.valor }}</li>
      <li>{{ produto.tamanho }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      produtos: [],
    };
  },
  async mounted() {
    const resp = await fetch("http://localhost:3000/produtos");
    const response = await resp.json();
    this.produtos = response;
  },
};
</script>

<style>
</style>