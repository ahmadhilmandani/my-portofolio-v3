<script setup>
import NumberingSection from '../components/numberingSection.vue'
import { IconBrandVue, IconBrandReact, IconBrandTailwind, IconBrandNuxt, IconBrandMysql, IconBrandJavascript, IconBrandHtml5, IconBrandFigma, IconBrandCss3, IconBrandBootstrap } from '@tabler/icons-vue'
</script>

<template>
  <div class="min-h-screen px-4 lg:px-28 pt-28 2xl:px-40">
    <NumberingSection v-motion-slide-visible-left>
      <template #number>
        1.
      </template>
      <template #title>
        About Me!
      </template>
    </NumberingSection>
    <div class="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between mt-14"
      v-motion-fade-visible>
      <div class="md:w-4/6 md:px-0 px-4 mt-8 lg:mt-0">
        <p class="text-[20px] 2xl:text-2xl">
          Hello, there! i'm Hilman, an undergraduate student of Informatics Engineering in UPN Veteran Jawa Timur with a
          passion for mastering frontend web development and UX design.
        </p>
        <p class="text-[20px] 2xl:text-2xl my-8">
          It's so satisfying to create stunning and user-friendly websites with an exceptional user experience. To achieve
          this, Insya Allah,
          I'd try my best to improve my skills and stay up-to-date with the latest technologies and trends in the
          industry.
        </p>
        <p class="text-[20px] 2xl:text-2xl">
          Here are a few technologies I’ve been working with :
        </p>

        <ul class="list-inside grid grid-cols-3 grid-rows-4 gap-10 mt-4">
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>
            <div class="w-10 2xl:w-16 aspect-square">
              <IconBrandVue size="100%" stroke-width="2.1" class="stroke-custom-green-100" />
            </div>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandReact size="100%" stroke-width="2.1" class="stroke-sky-400" />
            </div>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandNuxt size="100%" stroke-width="2.1" class="stroke-custom-green-100" />
            </div>

          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandTailwind size="100%" stroke-width="2.1" class="stroke-cyan-400" />
            </div>

          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandJavascript size="100%" stroke-width="2.1" class="stroke-amber-500" />
            </div>

          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandFigma size="100%" stroke-width="2.1" class="stroke-rose-400" />
            </div>

          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square ">
              <IconBrandCss3 size="100%" stroke-width="2.1" class="stroke-sky-400" />
            </div>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square bg-red-50">
              <IconBrandBootstrap size="100%" stroke-width="2.1" class="stroke-violet-500" />
            </div>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square bg-red-50">
              <IconBrandHtml5 size="100%" stroke-width="2.1" class="stroke-orange-600" />
            </div>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-2 aspect-square bg-custom-black-50 rounded-full"></div>

            <div class="w-10 2xl:w-16 aspect-square bg-red-50">
              <IconBrandMysql size="100%" stroke-width="2.1" class="stroke-cyan-600" />
            </div>
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