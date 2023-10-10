<script setup>
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-vue'
</script> 

<template>
  <footer class='w-full bg-custom-black-50 lg:px-28 relative mt-48 py-12' v-motion-slide-visible-bottom>
    <div class='flex flex-wrap justify-center items-start gap-12 lg:gap-32 lg:p-12 p-6'>
      <svg width="100" height="200" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.47754 7.82878e-07L0 0L-3.05609e-06 17.4788L20.9745 17.4788L20.9746 3.66731e-06L16.5538 2.89436e-06L16.5538 13.5458L4.47754 13.5458L4.47754 7.82878e-07Z"
          fill="#00DC82" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.47448 35.5767L3.24253e-05 38.7727L3.79578e-05 19.1229L21 19.1229L21 38.7767L20.9845 38.7767L16.5507 35.5745L16.5507 23.9329L4.47448 23.9329L4.47448 35.5767Z"
          fill="#00DC82" />
      </svg>
      <div class='text-custom-green-100'>Available Services
        <ol class='list-disc text-sm leading-loose '>
          <li class='text-custom-green-100 mt-3'>Frontend Web Development</li>
          <li class='text-custom-green-100 mt-3'>UI/UX Design</li>
          <li class='text-custom-green-100 mt-3'>UI/UX Design & Frontend Web Development</li>
          <li class='text-custom-green-100 mt-3'>Fullstack Web Development (React JS & Express)</li>
        </ol>
      </div>
      <div class='flex flex-wrap justify-center items-start lg:gap-10 gap-5'>
        <a href="https://github.com/ahmadhilmandani" class="relative z-[99] hover:-translate-y-2 transition-all"
          target="_blank">
          <IconBrandGithub class="stroke-custom-green-100" />
        </a>
        <a href="mailto:ahmadhilmanlagi@gmail.com" class="relative z-[99] hover:-translate-y-2 transition-all"
          target="_blank">
          <IconBrandGmail class="stroke-custom-green-100" />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/"
          class="relative z-[99] hover:-translate-y-2 transition-all" target="_blank">
          <IconBrandLinkedin class="stroke-custom-green-100" />
        </a>
        <a href="https://www.instagram.com/ahmadhilmandani/?hl=id" class="relative z-[99] hover:-translate-y-2 transition-all"
          target="_blank">
          <IconBrandInstagram class="stroke-custom-green-100" />
        </a>
      </div>
    </div>
    <div class='bg-custom-black-100 text-center text-sm py-2 mt-8 text-custom-beige-50 absolute bottom-0 left-0 right-0'>©
      2023. All rights reserved.
    </div>
  </footer>
</template>