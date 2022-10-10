<script setup lang="ts">
import { watch } from "vue";
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { AJAX } from "../../helper/helper";

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
    const c = await AJAX(name);

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
      languages: Object.entries(c?.languages)?.map(([key, value]) => value),
      borders: await Promise.all(
        c?.borders?.map(async (b: string) => {
          const data = await AJAX(b);
          const bordersObj = {
            borderName: data?.name?.common,
            borderCca3: data?.cca3,
          };
          return bordersObj;
        }) ?? []
      ),
    };
  } catch (e) {
    throw e;
  }
};

const goToBorder = (border: string) => {
  router.push(`${border}`);
};

getCountry(name);
</script>

<template>
  <main class="container grid">
    <router-link to="/">
      <button type="button" class="back-button fs-country-detail shadow-3 flex">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        Back
      </button>
    </router-link>

    <article v-if="country" class="country grid">
      <div class="country-flag card-detail-radius-mb shadow">
        <img class="card-detail-radius-mb" :src="country.flag" />
      </div>

      <section class="country-detail grid">
        <h3 class="fs-600 fw-800">{{ country.name }}</h3>
        <div class="details grid">
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
        </div>

        <div v-if="country.borders" class="country-border">
          <div class="flex">
            <h4 class="fs-400 fw-600">Border Countries:</h4>
            <div class="borders flex">
              <button
                type="button"
                class="shadow-2"
                @click="goToBorder(border.borderCca3)"
                v-for="border in country.borders"
                :key="border.borderName"
              >
                {{ border.borderName }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped>
.back-button {
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 32px;
  border-radius: 2px;
  --gap: 0.5rem;
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
  min-height: 229px;
  background-color: gray;
}

.country-detail {
  align-self: center;
  --gap: 1.2rem;
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

ul:nth-child(2) {
  margin-block: 1rem;
}

.country-border button {
  width: 96px;
  height: 28px;
  font-size: var(--fs-input-200);
  border-radius: 2px;
}

.country-border > div {
  flex-direction: column;
}

.country-border h4 {
  white-space: nowrap;
}

.borders {
  flex-wrap: wrap;
  --gap: 10px;
}

@media only screen and (min-width: 820px) {
  .country {
    grid-template-columns: 1.3fr 1fr;
  }
}

@media only screen and (min-width: 1440px) {
  main {
    padding: 5rem 0;
  }

  .back-button {
    width: 136px;
    height: 40px;
    border-radius: 6px;
  }

  .country {
    grid-template-columns: 560px 574px;
    justify-content: space-between;
  }

  .country-detail {
    min-height: 323px;
    --gap: 1.5rem;
  }

  .country-flag {
    height: 401px;
    border-radius: 10px;
  }

  .country-flag img {
    border-radius: 10px;
  }

  .details {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }

  ul:nth-child(2) {
    margin-block: 0;
  }

  .country-border > div {
    flex-direction: row;
  }

  .country-border button {
    width: 99px;
  }
}
</style>
