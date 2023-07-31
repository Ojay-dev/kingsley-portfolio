<script setup>
import { shallowRef } from 'vue';
import ChevronRightIcon from '../components/icons/IconChevronRight.vue';
import ChevronRightSmIcon from '../components/icons/IconChevronRightSM.vue';
import ActivityIcon from '../components/icons/IconActivity.vue';
import BookmarkIcon from '../components/icons/IconBookmark.vue';
import CategoryIcon from '../components/icons/IconCategory.vue';
import GraphIcon from '../components/icons/IconGraph.vue';
import HeartIcon from '../components/icons/IconHeart.vue';
import ProjectItem from '../components/ProjectItem.vue';

const projects = shallowRef([
  {
    id: 'c3d90575',
    name: 'Ladda - A one stop investments platform',
    description:
      'Ladda enables everyday people to invest and save towards their goals and build a financial safety net.',
    icon: GraphIcon,
    bgColor: 'bg-[#EBFAFF]',
    appImage: ''
  },
  {
    id: 'd7370aa2',
    name: 'Letshego - An SMS API hub',
    description:
      'An SMS hub containing different SMS API providers, which routes SMS based on the effective SMS provider in the receiver’s country.',
    icon: ActivityIcon,
    bgColor: 'bg-[#FEF8EF]',
    appImage: ''
  },
  {
    id: '458a0248',
    name: 'Prestmit - Mobile app redesign',
    description:
      'Prestmit is a fintech product that allows users to trade, buy and sell various digital assets including gift cards, bitcoins, USDT, litecoins, dogecoins, etc.',
    icon: CategoryIcon,
    bgColor: 'bg-[#FBF3F6]',
    appImage: ''
  },
  {
    id: 'f56c24fe',
    name: 'Dryva - Connecting car owners with drivers',
    description:
      'Dryva is a professional hiring service that connects trusted drivers to clients who already own vehicles but require drivers.',
    icon: BookmarkIcon,
    bgColor: 'bg-[#E5F5FE]',
    appImage: ''
  },
  {
    id: 'e8f66421',
    name: 'Dryva - Connecting car owners with drivers',
    description:
      'Dryva is a professional hiring service that connects trusted drivers to clients who already own vehicles but require drivers.',
    icon: HeartIcon,
    bgColor: 'bg-[#F4F6FE]',
    appImage: ''
  }
]);
</script>

<template>
  <main class="max-w-screen-2xl 2xl:mx-auto">
    <!-- <TheWelcome /> -->

    <!-- Hero Section -->
    <div class="mx-5 mb-36 mt-[112px] max-w-[886px] lg:ml-32 xl:ml-[20%]">
      <p
        class="font-inter text-[28px] font-semibold leading-[40px] sm:text-[48px] sm:leading-[64px]"
      >
        A creative Product Designer with a focus on helping startups and large
        <span class="font-semibold sm:text-[#7E889C]"
          >organizations design modern and user-centric solutions.</span
        >
      </p>

      <div class="mt-12 flex gap-x-6 md:mt-20">
        <router-link to="#" class="rounded-lg bg-orange px-[26px] py-3 text-lg font-medium"
          >My Resume</router-link
        >
        <router-link
          to="#"
          class="flex items-center gap-x-[10px] rounded-lg bg-gray px-[26px] py-3 text-lg font-medium"
          >Contact Me
          <ChevronRightIcon />
        </router-link>
      </div>
    </div>

    <!-- Body Section -->
    <div>
      <div
        class="mx-5 mb-36 grid flex-col flex-wrap justify-start gap-x-14 gap-y-14 md:mx-10 md:grid-cols-2 lg:gap-y-20"
      >
        <template v-for="item in projects" :key="item.id">
          <ProjectItem :bgColor="item.bgColor">
            <template #icon> <component :is="item.icon" /> </template>

            <template #heading>
              {{ item.name }}
            </template>

            <template #description>
              {{ item.description }}
            </template>

            <template #default>
              <router-link
                to="#"
                class="flex items-center gap-x-[10px] text-sm font-semibold text-[#3185F7]"
                >View Case Study
                <ChevronRightSmIcon />
              </router-link>
            </template>

            <template #appImage>
              <img alt="Logo" src="@/assets/LaddaApp.svg" />
            </template>
          </ProjectItem>
        </template>
      </div>
    </div>
  </main>
</template>
