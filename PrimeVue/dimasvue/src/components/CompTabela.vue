<template>
  <div>
    <h2>CompTabela</h2>
    <InputText v-model="text" />
    <ButtonComp label="OK" icon="pi pi-save" @click="alerta()"></ButtonComp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import CarService from "../service/CarService ";

export default defineComponent({
  name: "CompTabela",

  data() {
    return {
      text: "CompHome",
    };
  },
  methods: {
    alerta(): void {
      alert("TESTE");
      this.text = "";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
