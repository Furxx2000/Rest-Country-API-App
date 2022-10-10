<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

interface Theme {
  userTheme: string;
}

const emit = defineEmits(["mode"]);
const props = defineProps<Theme>();
const { userTheme } = toRefs(props);
const darkMode = computed(() => userTheme.value === "dark-mode");

const toggleMode = () => {
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
