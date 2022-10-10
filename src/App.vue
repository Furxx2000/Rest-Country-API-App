<script setup lang="ts">
import { useRoute } from "vue-router";
import {} from "./main";

const route = useRoute();

const toggleMode = () => {
  document.querySelector("body")?.classList.toggle("dark-mode");
};
</script>

<template>
  <TheHeader @mode="toggleMode" />
  <router-view v-slot="{ Component }">
    <transition name="router" mode="out-in">
      <component :is="Component" :key="route.push"></component>
    </transition>
  </router-view>
</template>

<style>
body {
  background-color: hsl(var(--clr-light-gray));
  min-height: 100vh;
}

.router-enter-from {
  opacity: 0;
  translate: 0 -30px;
}

.router-leave-to {
  opacity: 0;
  translate: 0 30px;
}

.router-enter-active {
  transition: all 0.5s ease-out;
}

.router-leave-active {
  transition: all 0.5s ease-in;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
  translate: 0 0;
}
</style>
