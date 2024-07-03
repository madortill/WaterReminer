<template>
  <div id="navbar">
    <a class="toggle-button" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div :class="['navbar-links', { active: isActive }]">
      <ul>
        <li><a @click="changePageAddres('/homePage')" id="home">בית</a></li>
        <li><a @click="changePageAddres('/infoPage')" id="info">מידע</a></li>
        <li><a @click="changePageAddres('/drinks')" id="drink">שתייה</a></li>
        <li><a @click="changePageAddres('/about')" id="about">עלינו</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
      page: 1,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    changePageAddres(path, event) {
      this.$router.push(path);
      if (path === "/drinks") {
        this.page = 3;
      } else if( path === "/homePage") {
        this.page = 1;
      } else if( path === "/about") {
        this.page = 4;
      } else if( path === "/infoPage") {
        this.page = 2;
      }
      this.$emit("curr-page", this.page);
    },
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #002753;
  color: white;
  padding: 0 50px;
}

.brand-title {
  font-size: 1.5rem;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0%;
  list-style: none;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
