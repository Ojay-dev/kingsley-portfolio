<script setup>
import { RouterLink } from 'vue-router';

import FacebookIcon from '../components/icons/IconFacebook.vue';
import TwitterIcon from '../components/icons/IconTwitter.vue';
import LinkedinIcon from '../components/icons/IconLinkedin.vue';
import MediumIcon from '../components/icons/IconMedium.vue';
</script>

<template>
  <footer
    class="mx-5 grid max-w-screen-xl gap-y-8 border-t-[4px] border-t-[#F5F5F5] pb-14 pt-9 md:mx-10 lg:mx-48 lg:pb-20 lg:pt-[75px] 2xl:mx-auto"
  >
    <div class="footer-logo">
      <router-link to="/"><img alt="Logo" src="@/assets/svgs/logo.svg" /></router-link>
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
      <RouterLink to="/about-me" class="text-sm text-body-text">About Me</RouterLink>
      <RouterLink to="#" class="text-sm text-body-text">My Resume</RouterLink>
      <RouterLink to="#" class="text-sm text-body-text">Contact</RouterLink>
    </nav>
  </footer>
</template>
