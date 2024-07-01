<template>
  <div id="app">
    <navbar></navbar>
    <home-page></home-page>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: "app",
  components: {
    Navbar,
    HomePage
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@font-face {
  font-family: 'Heebo Black';
  src: url('/src/assets/fonts/heebo.black.ttf') format('truetype');
}

@font-face {
  font-family: "Heebo-Bold";
  src: url("@/assets/fonts/heebo.black.ttf");
}

* {
  font-family: 'Heebo', sans-serif; 
}

body,
html {
  margin: 0;
  direction: rtl;
  background-color: rgb(216, 239, 247);
}
</style>
