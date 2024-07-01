<template>
  <div id="navbar">
    <!-- <div class="brand-title">Brand</div> -->
    <a class="toggle-button" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div :class="['navbar-links', { active: isActive }]">
      <ul>
        <li><a href="#">בית</a></li>
        <li><a href="#">מידע</a></li>
        <li><a href="#">שתייה</a></li>
        <li><a href="#">עלינו</a></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive ;
    },
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between ;
  align-items: center;
  height: 60px;
  background-color: #002753;
  color: white;
  padding: 0 50px;
}

.brand-title {
  font-size: 1.5rem;
}

.navbar-links {
  /* height: 100%; */
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-links li {
  /* Adjust padding here if needed */
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px 20px; /* Add padding to the anchor tags */
}

</style>
