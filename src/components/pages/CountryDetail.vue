<template>
  <main class="grid">
    <router-link to="/">
      <button type="button" class="back-button fs-header">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        Back
      </button>
    </router-link>

    <article v-if="country" class="country grid">
      <div class="country-flag">
        <img :src="country.flag" />
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
            Top Level Domain: <span>{{ country.tld }}</span>
          </li>
          <li>
            Currencies: <span>{{ country.currencies }}</span>
          </li>
          <li>
            Languages:
            <span v-for="lang in country.languages" :key="lang"
              >{{ lang }},
            </span>
          </li>
        </ul>

        <div v-if="country.borders" class="country-border grid">
          <h4 class="fs-400 fw-600">Border Countries:</h4>
          <div class="borders flex">
            <button
              type="button"
              @click="goToBorder(border)"
              v-for="border in country.borders"
              :key="border"
            >
              {{ border }}
            </button>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

interface Prop {
  name: string;
}

const route = useRoute();
const router = useRouter();
const prop = defineProps<Prop>();
const { name } = prop;
const country = ref();

watch(
  () => route.params.name,
  async (newName) => {
    await getCountry(newName);
  }
);

const getCountry = async (name: string | string[]) => {
  try {
    const url = `https://restcountries.com/v3.1/alpha/${name}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    const c = data[0];

    country.value = {
      flag: c?.flags?.svg,
      name: c?.name?.official,
      nativeName: Object.keys(c?.name?.nativeName).map(
        (key) => c?.name?.nativeName[key]
      )[0]?.official,
      population: c?.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      region: c?.region,
      subRegion: c?.subregion,
      capital: c?.capital[0],
      tld: c?.tld[0],
      currencies: Object.keys(c?.currencies).map((key) => c?.currencies[key])[0]
        ?.name,
      languages: Object.entries(c?.languages).map(([key, value]) => value),
      borders: c?.borders,
    };
  } catch (e) {
    throw e;
  }
};

function goToBorder(border: string) {
  router.push(`${border}`);
}

getCountry(name);
</script>

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

.borders {
  flex-wrap: wrap;
}
</style>
