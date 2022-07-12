<template>
  <div>
    <h1>Teste de componente</h1>
  </div>
</template>

<script>
export default {
  name: "ListProductsComponent",
  async setup() {
    const promise = new Promise((resolve) => {
      setTimeout(function () {
        resolve("Success");
      }, 3000);
    });

    const product = await promise;

    return {
      product,
    };
  },
};
</script>

<style>
</style>