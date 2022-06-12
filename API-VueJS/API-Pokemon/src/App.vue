<template>
  <div>
    <!-- <ul v-for="valor in valoratual" :key="valor.id"> -->
    <h2>Cotação de Bitcoin</h2>
    <hr />
    <ul>
      <li><strong>Data:</strong> {{ valoratual.time.updated }}</li>
      <li><strong>Moeda:</strong> {{ valoratual.chartName }}</li>
      <li><strong>Referência:</strong> {{ valoratual.bpi.USD.code }}</li>
      <li><strong>Valor:</strong> {{ valoratual.bpi.USD.rate }}</li>
      <li><strong>Descrição:</strong> {{ valoratual.bpi.USD.description }}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      valoratual: [],
    };
  },
  async mounted() {
    const resp = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const response = await resp.json();
    this.valoratual = response;
    console.log(this.valoratual.bpi.USD.rate);
  },
};
</script>

<style>
</style>