<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-content>
      <app-carousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Carousel from "@/components/widgets/CompCarrousel.vue";
import Menu from "@/components/template/CompMenu.vue";
import Toolbar from "@/components/template/CompToolbar.vue";
import Footer from "@/components/template/CompoFooter.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
