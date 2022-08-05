<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/primevue-logo.png" />
    <CompHome msg="Home View" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompHome from "@/components/CompHome.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    CompHome,
  },
});
</script>
