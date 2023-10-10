<script setup>
import NumberingSection from '../components/numberingSection.vue'
import { IconBrandVue, IconBrandReact, IconBrandTailwind, IconBrandNuxt, IconBrandMysql, IconBrandJavascript, IconBrandHtml5, IconBrandFigma, IconBrandCss3, IconBrandBootstrap, IconBrandFlutter } from '@tabler/icons-vue'
</script>

<template>
  <div class="min-h-screen px-10 lg:px-28 pt-28">
    <NumberingSection>
      <template #number>
        1.
      </template>
      <template #title>
        About Me!
      </template>
    </NumberingSection>
    <div class="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between mt-14">
      <div class="md:w-4/6 md:px-0 px-10 mt-8 lg:mt-0">
        <p class="text-[20px]">
          Hello, there! i'm Hilman, an undergraduate student of Informatics Engineering in UPN Veteran Jawa Timur with a
          passion for mastering frontend web development and UX design.
        </p>
        <p class="text-[20px] my-8">
          It's so satisfying to create stunning and user-friendly websites with an exceptional user experience. To achieve
          this, Insya Allah,
          I'd try my best to improve my skills and stay up-to-date with the latest technologies and trends in the
          industry.
        </p>
        <p class="text-[20px]">
          Here are a few technologies I’ve been working with :
        </p>

        <ul class="list-disc grid grid-cols-3 grid-rows-4 gap-10 mt-4">
          <li>
            <IconBrandVue size="28" stroke-width="2.1" class="stroke-custom-green-100"/>
          </li>
          <li>
            <IconBrandReact size="28" stroke-width="2.1" class="stroke-sky-400" />
          </li>
          <li>
            <IconBrandNuxt size="28" stroke-width="2.1" class="stroke-custom-green-100" />
          </li>
          <li>
            <IconBrandTailwind size="28" stroke-width="2.1" class="stroke-cyan-400" />
          </li>
          <li>
            <IconBrandJavascript size="28" stroke-width="2.1" class="stroke-amber-500" />
          </li>
          <li>
            <IconBrandFigma size="28" stroke-width="2.1" class="stroke-rose-400" />
          </li>
          <li>
            <IconBrandCss3 size="28" stroke-width="2.1" class="stroke-sky-400" />
          </li>
          <li>
            <IconBrandBootstrap size="28" stroke-width="2.1" class="stroke-violet-500" />
          </li>
          <li>
            <IconBrandHtml5 size="28" stroke-width="2.1" class="stroke-orange-600" />
          </li>
          <li>
            <IconBrandMysql size="28" stroke-width="2.1" class="stroke-cyan-600" />
          </li>
        </ul>
      </div>

      <div class="flex-1 grid grid-cols-1 grid-rows-1 gap-4">
        <img src="../assets/images/google1.jpg" alt=""
          class="rounded-full w-64 md:w-80 lg:w-auto lg:h-full justify-self-end hover:scale-[1.05] hover:-translate-x-4 hover:-translate-y-2 relative z-50 transition-all">
        <img src="../assets/images/google2.jpg" alt=""
          class="hidden lg:block rounded-full w-52 hover:scale-[1.05] hover:-translate-x-4 hover:-translate-y-2 relative z-50 transition-all self-start">
      </div>

    </div>
  </div>
</template>