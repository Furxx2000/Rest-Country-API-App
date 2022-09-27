<script setup lang="ts">
import { ref } from "@vue/reactivity";

const isOpenFilter = ref(false);

function toggleFilter() {
  isOpenFilter.value = !isOpenFilter.value;
}
</script>
<template>
  <div @click="toggleFilter" class="form-control input-filter">
    <input
      class="fs-input fw-400 card-style text-dark-blue-3"
      type="text"
      placeholder="Filter by Region"
      readonly
    />

    <button class="icon angle-down">
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        color="hsl(var(--clr-dark-blue-3))"
        size="xs"
      />
    </button>

    <ul v-if="isOpenFilter" class="bg-white card-style">
      <li>Africa</li>
      <li>America</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </ul>
  </div>
</template>

<style scoped>
.input-filter {
  width: 200px;
}

input {
  padding: 14px 24px;
}

.angle-down {
  right: 19px;
}

::placeholder {
  color: hsl(var(--clr-dark-blue-3));
}

ul {
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  padding: 1rem 1.5rem;
  list-style-type: none;
}

ul li {
  margin-block: 0.25rem;
}
</style>
