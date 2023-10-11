<script setup>
import NumberingSection from '../components/numberingSection.vue';
import ExperienceCard from '../components/ExperienceCard.vue'
import { IconBrandVue, IconBrandReact, IconBrandTailwind, IconBrandNuxt, IconBrandMysql, IconBrandJavascript, IconBrandHtml5, IconBrandFigma, IconBrandCss3, IconBrandBootstrap, IconBrandFlutter } from '@tabler/icons-vue'

</script>

<template>
  <div class="min-h-screen px-4 lg:px-28 pt-28 2xl:px-40">
    <NumberingSection v-motion-slide-visible-left>
      <template #number>
        2.
      </template>
      <template #title>
        Experience
      </template>
    </NumberingSection>

    <div class="lg:px-16">
      <ExperienceCard class="mt-24 mx-auto lg:mx-0" linkHref="https://www.linkedin.com/company/habitz-id/" v-motion-fade-visible>
        <template #thumbnail>
          <img src="../assets/images/logo-habitz-2.png" alt="" class="max-w-md w-full 2xl:max-w-xl">
        </template>
        <template #title>
          Currently a Web Developer Intern at Habitz.id
        </template>
        <template #content>
          Habitz.id is an Edutech Parenting Startup. Alhamdulillah, I now have the opportunity to become a web developer & UI/UX Designer there. The website we designed is still in the development stage, therefore, I have attached a link to linkedin Habitz.id on the "Details" button.
        </template>
        <template #skills>
          <IconBrandVue size="28" stroke-width="2.1" class="stroke-custom-green-100" />
          <IconBrandTailwind size="28" stroke-width="2.1" class="stroke-cyan-400" />
          <IconBrandNuxt size="28" stroke-width="2.1" class="stroke-custom-green-100" />
          <IconBrandFigma size="28" stroke-width="2.1" class="stroke-rose-400" />
          <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
            <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
        </template>
      </ExperienceCard>
      <ExperienceCard class="mt-24 mx-auto lg:mx-0" linkHref="https://www.linkedin.com/posts/ahmad-hilman-dani_peduly-intern-thank-you-bismillah-activity-7086734537199677440-z4Zd?utm_source=share&utm_medium=member_desktop" v-motion-fade-visible>
        <template #thumbnail>
          <img src="../assets/images/peduly.png" alt="" class="max-w-md w-full rounded-full 2xl:max-w-xl">
        </template>
        <template #title>
          Frontend Web Developer at Peduly and Working on Project Called (Zainzo)
        </template>
        <template #content>
          Peduly is a Crowdfunding startup founded by zain al multazam on 2018. But when i first come to Peduly as a frontend web developer internship, zain al multazam has another project called zainzo.
zainzo is a groundbreaking Human Management Resources website aimed at revolutionizing employee management.
        </template>
        <template #skills>
          <IconBrandReact size="28" stroke-width="2.1" class="stroke-sky-400" />
            <IconBrandTailwind size="28" stroke-width="2.1" class="stroke-cyan-400" />
            <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
            <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
        </template>
      </ExperienceCard>
      <ExperienceCard class="mt-24 mx-auto lg:mx-0" linkHref="https://www.linkedin.com/posts/ahmad-hilman-dani_hackfest-2023-hackfest-is-a-hackathon-activity-7044822794433417217-SwHW?utm_source=share&utm_medium=member_desktop" v-motion-fade-visible>
        <template #thumbnail>
          <img src="../assets/images/hackfest.jpg" alt="" class="max-w-md w-full rounded-full 2xl:max-w-xl">
        </template>
        <template #title>
          Committee at HackFest 2023 as Media and Creative Division
        </template>
        <template #content>
          Alhamdulillah, i'm humbly happy to announce that i'm a part of HackFest 2023 committee as a Media and Creative
          Division
        </template>
        <template #skills>
          <IconBrandFigma size="28" stroke-width="2.1" class="stroke-rose-400" />
        </template>
      </ExperienceCard>
    </div>
  </div>
</template>