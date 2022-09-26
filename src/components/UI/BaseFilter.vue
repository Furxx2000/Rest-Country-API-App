<script setup lang="ts"></script>
<template>
  <div class="input-filter">
    <input
      class="fs-input fw-400 text-dark-blue-3"
      type="text"
      placeholder="Filter by Region"
      readonly
    />

    <button class="icon-angle-down">
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        color="hsl(var(--clr-dark-blue-3))"
        size="xs"
      />
    </button>
  </div>
</template>

<style scoped>
.input-filter {
  position: relative;
  width: 200px;
}

.input-filter input {
  width: 100%;
  padding: 14px 24px;
}

.input-filter input:focus {
  outline: none;
}

.icon-angle-down {
  position: absolute;
  right: 19px;
  top: 50%;
  translate: 0 -50%;
}

::placeholder {
  color: hsl(var(--clr-dark-blue-3));
}
</style>
