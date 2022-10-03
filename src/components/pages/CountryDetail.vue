<script setup lang="ts"></script>

<template>
  <main class="grid">
    <button type="button" class="back-button fs-header">
      <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
      Back
    </button>

    <article class="country grid">
      <div class="country-flag">
        <img src="" alt="" />
      </div>

      <section class="country-detail grid">
        <h3 class="fs-600 fw-800">Belgium</h3>
        <ul class="flow">
          <li>Native Name: <span>Belgie</span></li>
          <li>Population: <span>11,319,511</span></li>
          <li>Region: <span>Europe</span></li>
          <li>Sub Region: <span>Western Europe</span></li>
          <li>Capital: <span>Brussels</span></li>
        </ul>

        <ul class="flow">
          <li>Top Level Domain: <span>.be</span></li>
          <li>Currencies: <span>Euro</span></li>
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
