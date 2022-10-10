<script setup lang="ts">
import { onBeforeMount, ref } from "@vue/runtime-core";
import { AJAX } from "../../helper/helper";

const countries = ref<any>([]);

const getCountry = async () => {
  try {
    const data = await AJAX();
    countries.value = data;
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

const getSearchResults = (data: []): void => {
  countries.value = data;
};

onBeforeMount(() => {
  getCountry();
});
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
        :country-flags="country?.flags?.svg"
        :country-name="country?.name?.official"
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
