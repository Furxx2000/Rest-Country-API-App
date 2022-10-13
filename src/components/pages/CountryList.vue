<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { AJAX, wait } from "../../helper/helper";

const getCountry = async () => {
  try {
    const data = await AJAX();
    return data;
  } catch (e) {
    throw e;
  }
};

const countries = ref<any>(await getCountry());

const changeRegion = async (region: string) => {
  try {
    countries.value = [];
    const data = await AJAX(undefined, region);
    await wait(0.6);
    countries.value = data;
  } catch (e) {
    throw e;
  }
};

const getSearchResults = async (data: []) => {
  countries.value = [];
  await wait(0.6);
  countries.value = data;
};
</script>

<template>
  <main class="grid container">
    <div class="inputs grid">
      <BaseSearch @search-results="getSearchResults" />
      <BaseFilter @change-region="changeRegion" />
    </div>

    <TransitionGroup name="list" tag="div" class="countries grid">
      <BaseCard
        v-for="country in countries"
        :key="country?.name?.official"
        :country-flags="country?.flags?.png"
        :country-name="country?.name?.common"
        :country-population="country?.population"
        :country-region="country?.region"
        :country-capital="country?.capital || []"
        :country-code="country?.cca3"
      />
    </TransitionGroup>
  </main>
</template>

<style scoped>
main {
  padding: 1.5rem 1rem;
  --gap: 2.5rem;
}

.countries {
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: center;
}

.list-enter-from {
  opacity: 0;
  translate: 0 -30px;
}

.list-leave-to {
  opacity: 0;
  translate: 0 30px;
}

.list-enter-active {
  transition: all 0.5s ease-out;
}

.list-leave-active {
  transition: all 0.5s ease-in;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  translate: 0 0;
}

@media only screen and (min-width: 820px) {
  .inputs {
    grid-template-columns: 480px 200px;
    justify-content: space-between;
  }
}

@media only screen and (min-width: 1440px) {
  main {
    padding: 3rem 0;
    --gap: 3rem;
  }
  .countries {
    row-gap: 75px;
    justify-content: space-between;
  }
}
</style>
