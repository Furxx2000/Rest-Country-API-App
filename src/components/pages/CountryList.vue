<script setup lang="ts">
import {} from "./CountryList.vue";
</script>

<template>
  <main class="grid">
    <BaseSearch />
    <BaseFilter />
    <BaseCard />
  </main>
</template>

<style scoped>
main {
  padding: 1.5rem 1rem;
  --gap: 2.5rem;
}
</style>
