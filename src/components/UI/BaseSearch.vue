<script setup lang="ts">
import {} from "./BaseSearch.vue";
</script>
<template>
  <div class="input-search">
    <button class="icon-search">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        color="hsl(var(--clr-ultra-light-gray))"
      />
    </button>

    <input
      class="fs-input fw-400 text-ultra-light-gray"
      type="text"
      placeholder="Search for a country..."
    />
  </div>
</template>
<style scoped>
.input-search {
  position: relative;
}

.input-search input {
  width: 100%;
  padding: 14px 2rem;
  padding-left: 74px;
}

.input-search input:focus {
  outline: none;
}

.icon-search {
  position: absolute;
  top: 50%;
  left: 2rem;
  translate: 0 -50%;
}
</style>
