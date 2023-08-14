<script setup>
import gsap from 'gsap';
import useProjects from '@/composables/useProjects';
import ChevronRightIcon from '@/components/icons/IconChevronRight.vue';
import ChevronRightSmIcon from '@/components/icons/IconChevronRightSm.vue';
import ProjectItem from '@/components/ProjectItem.vue';



const { projects } = useProjects(); // Access the projects data using the composable

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-100px)';
};

const enter = (el, done) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    }
  });

  observer.observe(el);
  // gsap.to(el, {
  //   opacity: 1,
  //   y: 0,
  //   duration: 0.8,
  //   onComplete: done,
  //   delay: el.dataset.index * 0.5,
  // });
}
</script>

<template>
  <main class="max-w-screen-2xl 2xl:mx-auto">
    <!-- Hero Section -->
    <div class="mx-5 max-w-[886px] lg:ml-32 xl:ml-[20%]">
      <div class="flex h-[calc(100vh-96px)] flex-col pt-[112px]">
        <div class="flex w-fit items-center gap-x-[22px] rounded-[33px] bg-gray py-[10px] pl-2 pr-8">
          <span class="rounded-[33px] bg-[#1B58B4] px-3 py-[6px] text-xs font-semibold text-white">PIXEL</span>

          <p class="text-sm font-medium">Hello, I’m Kingsley Omin.</p>
        </div>
        <p class="mt-[46px] font-inter text-[28px] font-semibold leading-[40px] sm:text-[48px] sm:leading-[64px]">
          A creative Product Designer with a focus on helping startups and large
          <span class="font-semibold sm:text-[#7E889C]">organizations design modern and user-centric solutions.</span>
        </p>

        <div class="mb-28 mt-12 flex gap-x-6 md:mt-20 lg:mb-[144px]">
          <router-link to="#" class="rounded-lg bg-orange px-[26px] py-3 text-lg font-medium">My Resume</router-link>
          <router-link to="#"
            class="flex items-center gap-x-[10px] rounded-lg bg-gray px-[26px] py-3 text-lg font-medium">Contact Me
            <ChevronRightIcon />
          </router-link>
        </div>
      </div>

      <div class="mb-[71px]">
        <div class="mb-3 flex w-fit items-center gap-x-2 rounded-[33px] bg-gray py-[10px] pl-2 pr-8">
          <b>💼</b>
          <p class="text-xs">My Portfolio</p>
        </div>

        <h3 class="text-[34px] font-semibold">Selected Projects</h3>
      </div>
    </div>

    <!-- Body Section -->

    <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter"
      class="mx-5 mb-36 grid flex-col flex-wrap justify-start gap-x-14 gap-y-14 md:mx-10 md:grid-cols-2 lg:gap-y-20">
      <template v-for="(item, index) in projects" :key="item.id">
        <ProjectItem :bgColor="item.bgColor" :data-index="index">
          <template #icon>
            <component :is="item.icon" />
          </template>

          <template #heading>
            {{ item.name }}
          </template>

          <template #description>
            {{ item.description }}
          </template>

          <template #default>
            <router-link :to="{ name: 'work', params: { workId: item.id } }"
              class="flex items-center gap-x-[10px] text-sm font-semibold text-[#3185F7]">View Case Study
              <ChevronRightSmIcon />
            </router-link>
          </template>

          <template #appImage>
            <img :alt="item.name" :src="item.appThumbnail" :class="item.alignRight ? 'ml-auto' : 'mx-auto'" />
          </template>
        </ProjectItem>
      </template>
    </transition-group>
  </main>
</template>
