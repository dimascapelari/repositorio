<template>
  <div>
    <p>(CompoNente.vue) Nome: {{ meunome }}</p>
    <button @click="alterar2()">Alterar 2</button>
  </div>
</template>

<script>
export default {
  props: ["meunome"],

  //----------------------------------------------------------------------------------
  // Criei um data para pegar a PROPS e mudar o ['meunome'] depois segui com o código
  // a partir dessa mudança para eliminar o erro que estava dando dizendo
  // que não podemos mudar uma props diretamente... (Solução Dimas 07/06/2022).
  data: function () {
    return {
      nomeprops: this.meunome,
    };
  },
  //----------------------------------------------------------------------------------
  methods: {
    alterar2() {
      this.nomeprops = "Batera";
      this.$emit("nomeAlterado", this.nomeprops);
    },
  },
};
</script>