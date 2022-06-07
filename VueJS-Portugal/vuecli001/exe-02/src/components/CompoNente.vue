<template>
  <div class="alert alert-info">
    <p>{{ analisar() }}</p>
  </div>
</template>

<script>
export default {
  props: ["meuvalor"],
  methods: {
    analisar() {
      if (this.meuvalor < 100) {
        return "Menor que 100!";
      } else if (this.meuvalor == 100) {
        return "Igual a 100!";
      } else {
        return "Maior que 100!";
      }
    },
  },
};
</script>