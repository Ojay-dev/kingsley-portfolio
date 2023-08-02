<script setup>
import { useRoute } from 'vue-router';
import useProjects from '../composable/useProjects';

const route = useRoute();

const { projects, getProject } = useProjects(); // Access the projects data using the composable
const project = route.params.workId ? getProject(route.params.workId) : projects.value[0]; // Get the project using the id from the route params

console.log(projects);
</script>

<template>
  <div class="about">
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
    </main>
  </div>
</template>
