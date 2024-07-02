<template>
  <div id="home-page">
    <h1 class="title-text">water reminder</h1>
  </div>
</template>

<script>
export default {
  name: "home-page",
  data() {
    return {};
  },
  methods: {},
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
}

#home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
  flex-direction: column;
}
.title-text {
  margin: 2%;
  color: rgb(8, 51, 136);
}
</style>
