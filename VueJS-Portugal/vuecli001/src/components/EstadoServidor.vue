<template>
  <div>
    <p>Estado do servidor: {{ estado }}</p>
    <div>
      <button @click="ligar">Ligar</button>
      <button @click="desligar">Desligar</button>
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
  },
};
</script>
