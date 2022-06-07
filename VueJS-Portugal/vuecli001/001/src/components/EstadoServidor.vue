<template>
  <div>
    <p>Estado do servidor: {{ estado }}</p>
    <div>
      <button @click="ligar">Ligar</button>
      <button @click="desligar">Desligar</button>
      <button @click="ligaDesliga">Liga/Desliga</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      estado: "Ligado",
    };
  },
  methods: {
    ligar() {
      this.estado = "Ligado";
    },
    desligar() {
      this.estado = "Desligado";
    },
    ligaDesliga() {
      if (this.estado == "Ligado") {
        this.estado = "Desligado";
      } else if (this.estado == "Desligado") {
        this.estado = "Ligado";
      }
    },
  },
};
</script>
