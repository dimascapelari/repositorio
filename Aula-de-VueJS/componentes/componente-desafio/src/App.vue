<template>
  <v-app>
    <Menu />
    <Toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Carousel from "@/components/widgets/CompCarrousel.vue";
import Menu from "@/components/template/CompMenu.vue";
import Toolbar from "@/components/template/CompToolbar.vue";
import Footer from "@/components/template/CompoFooter.vue";

export default {
  /*components: {
    appFooter: Footer,
    appCarousel: Carousel,
    appToolbar: Toolbar,
    appMenu: Menu,
  },*/
  components: { Footer, Carousel, Toolbar, Menu },
};
</script>
