<script setup lang="ts">
import { ref } from "@vue/reactivity";

const emit = defineEmits(["change-region"]);
const isOpenFilter = ref(false);
const regions = ref(["Africa", "America", "Asia", "Europe", "Oceania"]);
const filterValue = ref();

const toggleFilter = () => {
  isOpenFilter.value = !isOpenFilter.value;
};

const changeRegion = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  filterValue.value = target.textContent;
  emit("change-region", target.textContent);
};
</script>
<template>
  <div @click="toggleFilter" class="form-control input-filter">
    <input
      class="fs-input fw-400 input-style text-dark-blue-3"
      type="text"
      placeholder="Filter by Region"
      :value="filterValue"
      readonly
    />

    <button type="button" class="icon angle-down">
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        color="hsl(var(--clr-dark-blue-3))"
        size="xs"
      />
    </button>

    <ul v-if="isOpenFilter" class="bg-white input-style grid">
      <li @click="changeRegion" v-for="region in regions" :key="region">
        {{ region }}
      </li>
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
  --gap: 0.5rem;
}

ul li {
  font-size: var(--fs-input-200);
  transition: all 0.1s linear;
  cursor: pointer;
}

ul li:hover {
  scale: 1.1;
}
</style>
