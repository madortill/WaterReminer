<template>
  <div id="home-page">
    <h1 class="title-text">water reminder</h1>
    <p class="title-text" >בבקשה תעבוד</p>
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

<style scoped>
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
