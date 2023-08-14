<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header class="header-box-shadow">
    <div class="mx-5 flex max-w-screen-xl justify-between pb-4 pt-8 md:mx-10 lg:mx-48 2xl:mx-auto">
      <RouterLink to="/"><img alt="Logo" src="@/assets/svgs/logo.svg" /></RouterLink>

      <nav class="hidden w-1/4 justify-between xl:flex">
        <RouterLink
          to="/my-works"
          :class="`text-base font-medium ${
            route.path.includes('/my-works') && 'border-b-2 border-b-orange'
          }`"
          >My Works</RouterLink
        >
        <RouterLink
          to="/about-me"
          :class="`text-base font-medium ${
            route.path === '/about-me' && 'border-b-2 border-b-orange'
          }`"
          >About Me</RouterLink
        >
        <RouterLink
          to="#"
          :class="`text-base font-medium ${
            route.path === '/contact-me' && 'border-b-2 border-b-orange'
          }`"
          >Contact Me</RouterLink
        >
      </nav>
    </div>
  </header>
</template>
