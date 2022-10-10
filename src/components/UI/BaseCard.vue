<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";

interface Props {
  countryFlags: string;
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCode: string;
  countryCapital: string[];
}

const router = useRouter();
const route = useRoute();
const props = defineProps<Props>();
const {
  countryFlags,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
  countryCode,
} = toRefs(props);
const altText = `This country is ${countryName.value}`;
const transformedPopulationText = countryPopulation.value
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const capital = computed(() => countryCapital.value[0]);

const goToDetail = () => {
  router.push(`${route.path}/${countryCode.value}`);
};
</script>

<template>
  <article class="country-card card-style" @click="goToDetail">
    <div class="country-flag card-radius-mb">
      <img
        class="card-radius-mb"
        :src="countryFlags"
        :alt="altText"
        loading="lazy"
      />
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
        Capital: <span>{{ capital }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped>
.country-card {
  width: 100%;
  max-width: 264px;
  min-height: 336px;
  cursor: pointer;
}

.country-flag {
  height: 160px;
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
