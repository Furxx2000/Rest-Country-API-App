<script setup lang="ts"></script>

<template>
  <article class="country-card card-style">
    <div class="country-flag bg-dark-gray">
      <img src="" alt="" />
    </div>
    <div class="country-information">
      <h1 class="fs-500">Germany</h1>
      <p>Population: <span>81,770,900</span></p>
      <p>Region: <span>Europe</span></p>
      <p>Capital: <span>Berlin</span></p>
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
  min-height: 160px;
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
