<script setup lang="ts">
import {} from "@vue/reactivity";

const emit = defineEmits(["mode"]);

function toggleMode() {
  emit("mode");
}
</script>

<template>
  <header>
    <nav class="container flex">
      <router-link to="/">
        <h1 class="fs-header fw-800 text-dark-blue-3">Where in the world</h1>
      </router-link>

      <button
        @click="toggleMode"
        type="button"
        class="fs-switcher fw-600 text-dark-blue-3"
      >
        <font-awesome-icon icon="fa-regular fa-moon" size="xl" />
        Dark Mode
      </button>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 30px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}

nav {
  height: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
}

button {
  appearance: none;
  border: none;
  background-color: transparent;
}

@media only screen and (min-width: 1440px) {
  header {
    padding: 30px 5rem;
  }
}
</style>
