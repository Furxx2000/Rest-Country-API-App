<script setup lang="ts">
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";

const route = useRoute();
const userTheme = ref();

const getTheme = () => {
  return localStorage.getItem("user-theme");
};

const setTheme = (userTheme: string) => {
  localStorage.setItem("user-theme", userTheme);
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) return "dark-mode";
  else return "light-mode";
};

const toggleMode = () => {
  if (userTheme.value === "light-mode") {
    setTheme("dark-mode");
  } else {
    setTheme("light-mode");
  }
  userTheme.value = getTheme();
  document.querySelector("body")?.classList.toggle("dark-mode");
};

onBeforeMount(() => {
  const theme = getTheme() || getMediaPreference();
  userTheme.value = theme;

  if (theme === "dark-mode")
    document.querySelector("body")?.classList.add("dark-mode");
  else document.querySelector("body")?.classList.remove("dark-mode");
});
</script>

<template>
  <TheHeader @mode="toggleMode" :user-theme="userTheme" />
  <router-view v-slot="{ Component }">
    <Transition name="router" mode="out-in">
      <component :is="Component"></component>
    </Transition>
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
