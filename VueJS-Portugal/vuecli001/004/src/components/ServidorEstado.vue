<template>
  <div>
    <p>Estado do servidor: {{ estado }}</p>
    <div>
      <button @click="desligar">Desligar o servidor</button>
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
    desligar() {
      this.estado = "Desligado";
    },
  },
};
</script>