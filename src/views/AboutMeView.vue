<script setup>
import NumberingSection from '../components/numberingSection.vue'
import { IconBrandVue, IconBrandReact, IconBrandTailwind, IconBrandNuxt, IconBrandMysql, IconBrandJavascript, IconBrandHtml5, IconBrandFigma, IconBrandCss3, IconBrandBootstrap, IconBrandFlutter } from '@tabler/icons-vue'
</script>

<template>
  <div class="min-h-screen lg:px-28 pt-28">
    <NumberingSection>
      <template #number>
        1.
      </template>
      <template #title>
        About Me!
      </template>
    </NumberingSection>
    <div class="flex justify-between mt-14">
      <div class="w-4/6">
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

        <ul class="list-disc grid grid-cols-3 grid-rows-4">
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandVue size="24" stroke-width="2" color="#23252A"/>
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-300 hover:shadow-lg hover:shadow-sky-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandReact size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandNuxt size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-300 hover:shadow-lg hover:shadow-sky-400/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandTailwind size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-200 hover:shadow-lg hover:shadow-yellow-300/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandJavascript size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-rose-500 hover:to-rose-300 hover:shadow-lg hover:shadow-rose-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandFigma size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-200 hover:shadow-lg hover:shadow-custom-green-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandCss3 size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-300 hover:shadow-lg hover:shadow-violet-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandBootstrap size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 hover:shadow-lg hover:shadow-orange-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandHtml5 size="24" stroke-width="2" color="#23252A" />
          </li>
          <li class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-orange-300 hover:shadow-lg hover:shadow-cyan-500/50 shadow- hover:-translate-y-1 transition-all w-fit mt-4 relative z-[2]">
            <IconBrandMysql size="24" stroke-width="2" color="#23252A" />
          </li>
        </ul>
      </div>

      <div class="flex-1 grid grid-cols-1 grid-rows-1 gap-4">
        <img src="../assets/images/google1.jpg" alt=""
          class="rounded-full h-full justify-self-end hover:scale-[1.05] hover:-translate-x-4 hover:-translate-y-2 relative z-50 transition-all">
        <img src="../assets/images/google2.jpg" alt=""
          class="rounded-full w-52 hover:scale-[1.05] hover:-translate-x-4 hover:-translate-y-2 relative z-50 transition-all self-start">
      </div>

    </div>
  </div>
</template>