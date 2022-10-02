<script setup lang="ts">
import { onBeforeMount, ref } from "@vue/runtime-core";
import {} from "./CountryList.vue";

const countries = ref(null);

async function getCountry() {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    countries.value = data.slice(0, 10);
  } catch (e) {
    throw e;
  }
}

onBeforeMount(() => {
  getCountry();
});
</script>

<template>
  <main class="grid">
    <BaseSearch />
    <BaseFilter />
    <BaseCard
      v-for="country in countries"
      :key="country.name.official"
      :country-flags="country.flags.svg"
      :country-name="country.name.official"
      :country-population="country.population"
      :country-region="country.region"
      :country-capital="country.capital"
    />
  </main>
</template>

<style scoped>
main {
  padding: 1.5rem 1rem;
  --gap: 2.5rem;
}
</style>
