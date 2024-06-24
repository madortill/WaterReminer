<template>
  <nav id="navbar">
    <div class="brand-title">Brand</div>
    <a class="toggle-button" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div :class="['navbar-links', { active: isActive }]">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
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
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: white;
  padding: 0 20px;
}

.brand-title {
  font-size: 1.5rem;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-links li {
  padding: 0 20px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.toggle-button {
  position: absolute;
  top: 15px;
  right: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .toggle-button {
    display: flex;
  }
  
  .navbar-links {
    display: none;
    width: 100%;
  }
  
  .navbar-links ul {
    flex-direction: column;
    width: 100%;
  }
  
  .navbar-links li {
    text-align: center;
    padding: 15px 0;
    width: 100%;
  }
  
  .navbar-links.active {
    display: flex;
  }
}
</style>
