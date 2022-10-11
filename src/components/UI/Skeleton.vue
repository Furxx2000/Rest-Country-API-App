<script setup lang="ts">
import {} from "./BaseCard.vue";
</script>
<template>
  <article class="country-card card-style">
    <div class="country-flag card-radius-mb skeleton"></div>
    <div class="country-information flow">
      <h1 class="skeleton-text skeleton"></h1>
      <p class="skeleton-text short skeleton"></p>
      <p class="skeleton-text short skeleton"></p>
      <p class="skeleton-text short skeleton"></p>
    </div>
  </article>
</template>

<style scoped>
.country-card {
  width: 100%;
  max-width: 264px;
  min-height: 336px;
  cursor: pointer;
}

.country-flag {
  height: 160px;
}

.country-information {
  padding: 1.5rem;
}
</style>
