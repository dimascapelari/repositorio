<template>
  <div>
    <Carousel
      :value="cars"
      :numVisible="3"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="3000"
    >
      <template #header>
        <h2>Circular, AutoPlay</h2>
      </template>
      <template #item="slotProps"> Content </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "primevue/carousel";

export default defineComponent({
  name: "HelloWorld",

  components: {
    Carousel,
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
