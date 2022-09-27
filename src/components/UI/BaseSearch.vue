<script setup lang="ts">
import {} from "./BaseSearch.vue";
</script>
<template>
  <div class="form-control">
    <button class="icon search">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        color="hsl(var(--clr-ultra-light-gray))"
      />
    </button>

    <input
      class="fs-input fw-400 card-style text-ultra-light-gray"
      type="text"
      placeholder="Search for a country..."
    />
  </div>
</template>
<style scoped>
input {
  padding: 14px 2rem;
  padding-left: 74px;
}

.search {
  left: 2rem;
}
</style>
