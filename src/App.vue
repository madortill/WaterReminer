<template>
  <div id="app">
    <navbar @curr-page = "nextSub"></navbar>
    <home-page v-if = "currPage === 1"></home-page>
    <info-page v-if = "currPage === 2"> </info-page>
    <drinks v-if = "currPage === 3"></drinks>
    <about-us v-if = "currPage === 4"></about-us>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";
import AboutUs from "./components/AboutUs.vue";
import InfoPage from "./components/InfoPage.vue";
import Drinks from "./components/Drinks.vue";

export default {
  name: "app",
  components: {
    Navbar,
    HomePage,
    AboutUs,
    Drinks,
    InfoPage,
  },
  data() {
    return {
      currPage: 0,
    };
  },
  methods: {
    nextSub(page) {
      console.log(page);
      this.currPage = page;
    }
  },
};
</script>

<style>
@font-face {
  font-family: "Heebo";
  src: url("@/assets/fonts/Heebo-Medium.ttf");
}

@font-face {
  font-family: "Heebo-Bold";
  src: url("@/assets/fonts/Heebo-Bold.ttf");
}

* {
  overflow: hidden;
  font-family: "Heebo";
  direction: rtl;
}

body,
html {
  margin: 0;
  background-color: rgb(233, 232, 232);
}
</style>
