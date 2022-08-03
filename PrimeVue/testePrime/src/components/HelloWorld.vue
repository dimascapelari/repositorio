<template>
  <div class="card">
    <Carousel
      :value="listaDeProdutos"
      :numVisible="3"
      :numScroll="1"
      :circular="true"
    >
      >
      <template #header>
        <div class="borda azul">
          <h4>HEADER</h4>
        </div>
      </template>

      <template #item="produto">
        <!-- <a :href="produto.data.url" target="_blank"> -->
        <div class="borda vermelha">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <p>produto: {{ produto.data.name }}</p>
          <p>produto: {{ produto.data.description }}</p>
        </div>
        <!-- </a> -->
      </template>

      <template #footer>
        <div class="borda verde">
          <h4>FOOTER</h4>
        </div>
      </template>
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
      listaDeProdutos: [
        {
          id: "1000",
          url: "www.url.algumacoisa",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Black Watch",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Blue Band",
          description: "Product Description",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Blue T-Shirt",
          description: "Product Description",
          image: "blue-t-shirt.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "h456wer53",
          name: "Bracelet",
          description: "Product Description",
          image: "bracelet.jpg",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1005",
          code: "av2231fwg",
          name: "Brown Purse",
          description: "Product Description",
          image: "brown-purse.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1006",
          code: "bib36pfvm",
          name: "Chakra Bracelet",
          description: "Product Description",
          image: "chakra-bracelet.jpg",
          price: 32,
          category: "Accessories",
          quantity: 5,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1007",
          code: "mbvjkgip5",
          name: "Galaxy Earrings",
          description: "Product Description",
          image: "galaxy-earrings.jpg",
          price: 34,
          category: "Accessories",
          quantity: 23,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1008",
          code: "vbb124btr",
          name: "Game Controller",
          description: "Product Description",
          image: "game-controller.jpg",
          price: 99,
          category: "Electronics",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 4,
        },
        {
          id: "1009",
          code: "cm230f032",
          name: "Gaming Set",
          description: "Product Description",
          image: "gaming-set.jpg",
          price: 299,
          category: "Electronics",
          quantity: 63,
          inventoryStatus: "INSTOCK",
          rating: 3,
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
.card {
  width: 780px;
}

.p-carousel-prev,
.p-carousel-next {
  height: 40px;
  width: 400px;
}

.borda {
  border-width: 2px;
  border-style: solid;
}

.vermelha {
  border-color: red;
}
.azul {
  border-color: blue;
}
.verde {
  border-color: green;
}
.logo {
  width: 50px;
  height: 50px;
}
</style>