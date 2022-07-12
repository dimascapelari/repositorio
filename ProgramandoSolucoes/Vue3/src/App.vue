<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <Suspense>
    <template #default>
      <ListProductsComponent />
    </template>
    <template #fallback>
      <div>
        <h1>Loading ...</h1>
      </div>
    </template>
  </Suspense>
</template>  

<script>
import ListProductsComponent from "./components/ListProductsComponent.vue";

export default {
  name: "App",
  components: {
    ListProductsComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
