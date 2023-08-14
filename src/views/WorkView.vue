<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useProjects from '@/composables/useProjects';
import ChevronRightSmIcon from '@/components/icons/IconChevronRightSm.vue';

const route = useRoute();

const { projects, getProject } = useProjects(); // Access the projects data using the composable
const project = ref(route.params.workId ? getProject(route.params.workId) : projects.value[0]); // Get the project using the id from the route params

// This function is used to get the next project
function getNextProject() {
  const currentIndex = projects.value.findIndex((item) => item.id === project.value.id);
  const nextIndex = currentIndex + 1;

  if (nextIndex < projects.value.length) {
    project.value = projects.value[nextIndex];
  } else {
    project.value = projects.value[0];
  }
}
</script>

<template>
  <main class="max-w-screen-2xl 2xl:mx-auto">
    <div class="mx-5 mt-[72px] max-w-[886px] lg:ml-32 xl:ml-[20%]">
      <h1 class="text-[30px] font-semibold leading-10 text-header-text lg:text-[40px]">
        {{ project.name }}
      </h1>

      <p class="mt-10 text-2xl font-medium leading-10">{{ project.description }}</p>
    </div>

    <div class="mx-5 mt-24 max-w-screen-xl md:mx-10 lg:mx-48 2xl:mx-auto">
      <img :alt="project.name" :src="project.appImage" class="w-full" />
    </div>

    <div class="mx-5 mt-[104px] flex max-w-[886px] flex-col gap-y-20 lg:ml-32 xl:ml-[20%]">
      <div>
        <h2 class="mb-6 text-2xl font-semibold text-header-text">About the Project</h2>
        <p v-html="project.about" class="text-xl text-body-text"></p>
      </div>

      <div>
        <h2 class="mb-6 text-2xl font-semibold text-header-text">The Challenge</h2>
        <p v-html="project.challenge" class="text-xl text-body-text"></p>
      </div>

      <div>
        <h2 class="mb-6 text-2xl font-semibold text-header-text">Project Goal</h2>
        <ul
          v-for="(item, idx) in project.goal"
          :key="idx"
          class="flex list-disc flex-col gap-y-5 pl-5 text-xl text-body-text md:gap-y-2"
        >
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>

    <div
      class="mx-5 mb-[106px] mt-24 flex max-w-screen-xl justify-end md:mx-10 lg:mx-48 2xl:mx-auto"
    >
      <button
        @click="getNextProject"
        class="flex cursor-pointer items-center gap-x-6 border-b-2 border-b-body-text text-xl leading-10"
      >
        Next <ChevronRightSmIcon />
      </button>
    </div>
  </main>
</template>
