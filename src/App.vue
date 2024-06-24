<template>
  <div id="app">
    <navbar></navbar>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@font-face {
  font-family: "Heebo";
  src: url("@/assets/fonts/heebo.regular.ttf");
}

@font-face {
  font-family: "Heebo-Bold";
  src: url("@/assets/fonts/heebo.black.ttf");
}

body,
html {
  margin: 0;
  direction: rtl;
  background-color: rgb(199, 239, 252);
}
</style>
