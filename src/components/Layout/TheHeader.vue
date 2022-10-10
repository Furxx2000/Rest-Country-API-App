<script setup lang="ts">
import { ref } from "@vue/reactivity";

const emit = defineEmits(["mode"]);
const darkMode = ref(false);

const toggleMode = () => {
  darkMode.value = !darkMode.value;
  emit("mode");
};
</script>

<template>
  <header class="shadow-4">
    <nav class="container flex">
      <router-link to="/">
        <h1 class="fs-header fw-800 text-dark-blue-3">Where in the world</h1>
      </router-link>

      <button
        @click="toggleMode"
        type="button"
        class="fs-switcher fw-600 text-dark-blue-3"
      >
        <font-awesome-icon
          v-if="!darkMode"
          icon="fa-regular fa-moon"
          size="xl"
        />
        <font-awesome-icon v-else icon="fa-solid fa-moon" size="xl" />
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
