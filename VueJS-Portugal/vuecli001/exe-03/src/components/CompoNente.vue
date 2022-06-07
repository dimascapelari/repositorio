<template>
  <div>
    <p>componente child</p>
    <p>{{ valor1 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    valor1: {
      type: String,
      default: "Dimas Capelari",
    },
  },
};
</script>