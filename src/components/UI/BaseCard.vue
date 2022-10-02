<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import {} from "./BaseFilter.vue";

interface Props {
  countryFlags: string;
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCapital: [];
}

const props = defineProps<Props>();
const {
  countryFlags,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
} = toRefs(props);
const altText = `This country is ${countryName.value}`;
const transformedPopulationText = countryPopulation.value
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>

<template>
  <article class="country-card card-style">
    <div class="country-flag">
      <img :src="countryFlags" :alt="altText" loading="lazy" />
    </div>
    <div class="country-information">
      <h1 class="fs-500">{{ countryName }}</h1>
      <p>
        Population:
        <span>{{ transformedPopulationText }}</span>
      </p>
      <p>
        Region: <span>{{ countryRegion }}</span>
      </p>
      <p>
        Capital: <span>{{ countryCapital[0] }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped>
.country-card {
  width: 100%;
  max-width: 264px;
  min-height: 336px;
  margin-inline: 40px;
}

.country-flag {
  height: 160px;
  border-radius: 5px 5px 0 0;
}

.country-information {
  padding: 1.5rem;
}

.country-information h1 {
  margin-bottom: 1rem;
}

.country-information *:not(h1) {
  font-size: var(--fs-country-detail-300);
}

.country-information p {
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.country-information span {
  font-weight: 300;
}
</style>
