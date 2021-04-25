<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>

    <core-app-bar />

    <!-- <core-drawer /> -->

    <!-- <core-view /> -->

    <!-- <core-footer /> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./components/Home.vue";
import CoreDrawer from "./components/core/Drawer.vue";
import CoreFooter from "./components/core/Footer.vue";
import CoreAppBar from "./components/core/AppBar.vue";
import CoreView from "./components/core/View.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home,
    CoreDrawer,
    CoreFooter,
    CoreAppBar,
    CoreView,
  },

  data: () => ({
    //
  }),
});
</script>
