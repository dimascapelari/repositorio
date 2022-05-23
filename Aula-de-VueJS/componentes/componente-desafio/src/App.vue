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
import Carousel from "./CompCarrousel.vue";
import Menu from "./CompMenu.vue";
import Toolbar from "./CompToolbar.vue";
import Footer from "./CompoFooter.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
