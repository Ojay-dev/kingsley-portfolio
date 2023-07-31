<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header-box-shadow">
    <div class="mx-5 flex max-w-screen-xl justify-between pb-4 pt-8 md:mx-10 lg:mx-48 2xl:mx-auto">
      <img alt="Logo" src="@/assets/logo.svg" />

      <nav class="flex w-1/4 justify-between xl:w-1/5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
