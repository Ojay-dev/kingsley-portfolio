<script setup>
import { useRoute, useRouter } from 'vue-router';
import useProjects from '../composables/useProjects';
import ChevronRightSmIcon from '../components/icons/IconChevronRightSM.vue';

const route = useRoute();
const router = useRouter();

const { projects, getProject } = useProjects(); // Access the projects data using the composable
const project = route.params.workId ? getProject(route.params.workId) : projects.value[0]; // Get the project using the id from the route params

// This function is used to get the next project
function getNextProject() {
  const currentIndex = projects.value.findIndex((item) => item.id === project.id);
  const nextIndex = currentIndex + 1;

  if (nextIndex < projects.value.length) {
    const nextProjectId = projects.value[nextIndex].id;
    router.push({ name: 'work', params: { workId: nextProjectId } });
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

    <div class="mx-5 mt-24 flex max-w-screen-xl justify-end md:mx-10 lg:mx-48 2xl:mx-auto">
      <button
        @click="getNextProject"
        class="flex cursor-pointer items-center gap-x-6 border-b-2 border-b-body-text text-xl leading-10"
      >
        Next <ChevronRightSmIcon />
      </button>
    </div>
  </main>
</template>
