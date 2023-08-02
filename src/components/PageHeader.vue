<script setup></script>

<template>
  <header class="header-box-shadow">
    <div class="mx-5 flex max-w-screen-xl justify-between pb-4 pt-8 md:mx-10 lg:mx-48 2xl:mx-auto">
      <router-link to="/"><img alt="Logo" src="@/assets/svgs/logo.svg" /></router-link>

      <nav class="hidden w-1/4 justify-between xl:flex">
        <router-link
          to="/my-works"
          :class="`text-base font-medium ${
            $route.path === '/my-works' && 'border-b-2 border-b-orange'
          }`"
          >My Works</router-link
        >
        <router-link
          to="/about-me"
          :class="`text-base font-medium ${
            $route.path === '/about-me' && 'border-b-2 border-b-orange'
          }`"
          >About Me</router-link
        >
        <router-link
          to="#"
          :class="`text-base font-medium ${
            $route.path === '/contact-me' && 'border-b-2 border-b-orange'
          }`"
          >Contact Me</router-link
        >
      </nav>
    </div>
  </header>
</template>
