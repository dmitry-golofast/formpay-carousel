<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/" class="nav__link">Форма оплаты</RouterLink>
        <span class="wrapper__span">|</span>
        <RouterLink to="/carousel" class="nav__link">SMOTRIM</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.wrapper {
  &__span {
    color: rgb(132, 6, 235);
  }
}
.nav {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 10px;
  font-size: 16px;

  &__link {
    &:hover {
      color: rgb(195, 186, 224);
    }
  }
}
</style>
