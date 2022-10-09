<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["search-results"]);
const searchTerm = ref();

const submitSearchTerm = async () => {
  const url = searchTerm.value
    ? `https://restcountries.com/v3.1/name/${searchTerm.value?.toLowerCase()}`
    : "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

  emit("search-results", data);
};
</script>
<template>
  <form @submit.prevent="submitSearchTerm">
    <div class="form-control">
      <button type="submit" class="icon search">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          color="hsl(var(--clr-ultra-light-gray))"
        />
      </button>

      <input
        id="search-term"
        class="fs-input fw-400 card-style text-dark-blue-3"
        type="text"
        placeholder="Search for a country..."
        autocomplete="off"
        v-model.trim="searchTerm"
      />
    </div>
  </form>
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
