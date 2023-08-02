<script setup>
import { RouterLink, RouterView } from 'vue-router';
import FacebookIcon from './components/icons/IconFacebook.vue';
import TwitterIcon from './components/icons/IconTwitter.vue';
import LinkedinIcon from './components/icons/IconLinkedin.vue';
import MediumIcon from './components/icons/IconMedium.vue';
</script>

<template>
  <header class="header-box-shadow">
    <div class="mx-5 flex max-w-screen-xl justify-between pb-4 pt-8 md:mx-10 lg:mx-48 2xl:mx-auto">
      <img alt="Logo" src="@/assets/logo.svg" />

      <nav class="flex w-1/4 justify-between">
        <RouterLink to="/my-works" class="text-base font-medium">My Works</RouterLink>
        <RouterLink to="#" class="text-base font-medium">About Me</RouterLink>
        <RouterLink to="#" class="text-base font-medium">Contact Me</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer
    class="mx-5 grid max-w-screen-xl gap-y-8 border-t-[4px] border-t-[#F5F5F5] pb-14 pt-9 md:mx-10 lg:mx-48 lg:pb-20 lg:pt-[75px] 2xl:mx-auto"
  >
    <div class="footer-logo">
      <img alt="Logo" src="@/assets/logo.svg" />
    </div>

    <div class="footer-social-media flex items-center gap-x-3">
      <a href="#">
        <FacebookIcon />
      </a>
      <a href="#">
        <TwitterIcon />
      </a>
      <a href="#">
        <LinkedinIcon />
      </a>
      <a href="#">
        <MediumIcon />
      </a>
    </div>

    <p class="footer-copyright text-xs">© 2021 Kingsley Omin. All Rights Reserved.</p>

    <p class="footer-email text-base">kingsleyomin23@gmail.com</p>

    <nav class="footer-links flex lg:gap-x-3">
      <RouterLink to="/" class="text-sm text-body-text">My Works</RouterLink>
      <RouterLink to="#" class="text-sm text-body-text">About Me</RouterLink>
      <RouterLink to="#" class="text-sm text-body-text">My Resume</RouterLink>
      <RouterLink to="#" class="text-sm text-body-text">Contact</RouterLink>
    </nav>
  </footer>
</template>

<style scoped></style>
