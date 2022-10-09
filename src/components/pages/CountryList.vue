<script setup lang="ts">
import { onBeforeMount, ref } from "@vue/runtime-core";
import { AJAX } from "../../helper/helper";

const countries = ref(null);

const getCountry = async () => {
  try {
    const data = await AJAX();
    countries.value = data.slice(0, 32);
  } catch (e) {
    throw e;
  }
};

const changeRegion = async (region: string) => {
  try {
    const data = await AJAX(undefined, region);
    countries.value = data;
  } catch (e) {
    throw e;
  }
};

onBeforeMount(() => {
  getCountry();
});
</script>

<template>
  <main class="grid">
    <BaseSearch />
    <BaseFilter @change-region="changeRegion" />
    <BaseCard
      v-for="country in countries"
      :key="country.name.official"
      :country-flags="country.flags.svg"
      :country-name="country.name.official"
      :country-population="country.population"
      :country-region="country.region"
      :country-capital="country.capital || []"
      :country-code="country.cca3"
    />
  </main>
</template>

<style scoped>
main {
  padding: 1.5rem 1rem;
  --gap: 2.5rem;
}
</style>
