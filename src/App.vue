<script setup lang="ts">
import {} from "./main";

function toggleMode() {
  document.querySelector("body")?.classList.toggle("dark-mode");
}
</script>

<template>
  <TheHeader @mode="toggleMode" />
  <CountryList />
</template>

<style>
body {
  background-color: hsl(var(--clr-light-gray));
  min-height: 100vh;
}
</style>
