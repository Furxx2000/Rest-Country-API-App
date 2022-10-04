<script setup lang="ts">
import { toRef, toRefs, ref, reactive } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import {} from "./CountryList.vue";

interface Prop {
  name: string;
}

interface country {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string[];
  borderCountries: string[];
}

const prop = defineProps<Prop>();
const { name } = prop;
const country = ref<country>();
const altText = ref("");

async function getCountry() {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    country.value = {
      flag: data[0]?.flags?.svg,
      name: data[0]?.name?.official,
      nativeName: data[0]?.name?.nativeName?.isl?.official,
      population: data[0]?.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      region: data[0]?.region,
      subRegion: data[0]?.subregion,
      capital: data[0]?.capital[0],
      topLevelDomain: data[0]?.tld[0],
      currencies: data[0]?.currencies?.ISK?.name,
      languages: data[0]?.languages?.isl,
      borderCountries: data[0]?.border,
    };
    altText.value = `This country is ${country.value.name}`;
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
    <router-link to="/">
      <button type="button" class="back-button fs-header">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        Back
      </button>
    </router-link>

    <article class="country grid">
      <div class="country-flag">
        <img :src="country.flag" :alt="altText" />
      </div>

      <section class="country-detail grid">
        <h3 class="fs-600 fw-800">{{ country.name }}</h3>
        <ul class="flow">
          <li>
            Native Name: <span>{{ country.nativeName }}</span>
          </li>
          <li>
            Population: <span>{{ country.population }}</span>
          </li>
          <li>
            Region: <span>{{ country.region }}</span>
          </li>
          <li>
            Sub Region: <span>{{ country.subRegion }}</span>
          </li>
          <li>
            Capital: <span>{{ country.capital }}</span>
          </li>
        </ul>

        <ul class="flow">
          <li>
            Top Level Domain: <span>{{ country.topLevelDomain }}</span>
          </li>
          <li>
            Currencies: <span>{{ country.currencies }}</span>
          </li>
          <li>Languages: <span>Dutch, French, German</span></li>
        </ul>

        <div class="country-border grid">
          <h4 class="fs-400 fw-600">Border Countries:</h4>
          <div class="flex">
            <button type="button">France</button>
            <button type="button">Germany</button>
            <button type="button">Netherlands</button>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped>
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 104px;
  height: 32px;
  border-radius: 2px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
}

main {
  padding: 2.5rem 28px;
  --gap: 4rem;
}

.country {
  --gap: 44px;
}

.country-flag {
  width: 100%;
  height: 229px;
  border-radius: 5.7px;
  background-color: gray;
}

.country-detail {
  --gap: 1rem;
}

.country-detail *:not(h3, h4) {
  font-size: var(--fs-country-detail-300);
}

ul.flow {
  --flow: 0.5rem;
}

ul * {
  font-weight: var(--fw-600);
}

ul span {
  font-weight: var(--fw-300);
}

ul:nth-child(3) {
  margin-block: 1rem;
}

.country-border button {
  width: 96px;
  height: 28px;
  font-size: var(--fs-input-200);
  border-radius: 2px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
}
</style>
