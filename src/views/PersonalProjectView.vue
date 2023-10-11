<script setup>
import NumberingSection from '../components/numberingSection.vue';
import PersonalProjectCard from '../components/PersonalProjectCard.vue';
import { IconBrandVue, IconBrandReact, IconBrandTailwind, IconBrandJavascript, IconBrandHtml5, IconBrandCss3 } from '@tabler/icons-vue'
</script>

<template>
  <div class="w-full min-h-screen px-4 lg:px-28 pt-28 2xl:p-40 relative z-50">
    <NumberingSection v-motion-slide-visible-left>
      <template #number>
        3.
      </template>
      <template #title>
        Personal Projects Exercises.
      </template>
    </NumberingSection>

    <div class="lg:grid grid-cols-3 gap-4 mt-16">
      <PersonalProjectCard v-motion-fade-visible
        link-to-code="https://github.com/ahmadhilmandani/project-planner-vue-pinia/tree/deploy"
        link-to-site="https://simple-project-planner.netlify.app/">
        <template #thumbnail>
          <img src="../assets/images/project-planner-web.png" alt="" class="max-w-md w-full 2xl:max-w-xl">
        </template>
        <template #title>
          Project Planner
        </template>
        <template #content>
          Project Planner is a website to take a note of projects we want to created
        </template>
        <template #skills>
          <IconBrandVue size="28" stroke-width="2.1" class="stroke-custom-green-100" />
          <IconBrandTailwind size="28" stroke-width="2.1" class="stroke-cyan-400" />
          <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
          <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
        </template>
      </PersonalProjectCard>
      <PersonalProjectCard class="mt-8 lg:mt-0" v-motion-fade-visible
        link-to-code="https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/to-do-list-part-2"
        link-to-site="https://to-do-list-ahmadhilmandani.netlify.app/">
        <template #thumbnail>
          <img src="../assets/images/to-do-list-web.png" alt="" class="max-w-md w-full 2xl:max-w-xl">
        </template>
        <template #title>
          To Do List
        </template>
        <template #content>
          To Do List is a website make a list of things to do in a daily basis

        </template>
        <template #skills>
          <IconBrandReact size="28" stroke-width="2.1" class="stroke-sky-400" />
          <IconBrandTailwind size="28" stroke-width="2.1" class="stroke-cyan-400" />
          <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
          <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
        </template>
      </PersonalProjectCard>
      <PersonalProjectCard class="mt-8 lg:mt-0" v-motion-fade-visible
        linkToCode="https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/main/calculator"
        linkToSite="https://ahmadhilmandani.github.io/Frontendmentor-Hilman/calculator/">
        <template #thumbnail>
          <img src="../assets/images/calculator-web.png" alt="" class="max-w-md w-full 2xl:max-w-xl">
        </template>
        <template #title>
          Calculator App
        </template>
        <template #content>
          Calculator App is a website to do math operations online. There's also 3 theme of the site.
        </template>
        <template #skills>
          <IconBrandJavascript size="28" stroke-width="2.1" class="stroke-amber-500" />
          <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
          <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
        </template>
      </PersonalProjectCard>
    </div>
  </div>
</template>