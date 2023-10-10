<script setup>
const props = defineProps(['linkToSite', 'linkToCode'])
</script>

<template>
  <div class="flex flex-col items-center max-w-[350px] w-full rounded-3xl overflow-hidden border border-custom-black-50">
    <slot name="thumbnail"></slot>
    <div class="w-full p-8">
      <h1 class="text-lg font-semibold text-center">
        <slot name="title"></slot>
      </h1>
      <p class="my-2">
        <slot name="content"></slot>
      </p>
      <div class="flex gap-2 mb-8">
        <strong>Skills: </strong>
        <slot name="skills"></slot>
      </div>
      <div class="lg:flex gap-5">
        <a :href="linkToSite"
          class="md:px-4 py-2 rounded-full bg-gradient-to-r from-custom-green-100 to-custom-green-50 font-semibold uppercase text-sm hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all relative z-[99] text-center block w-full"
          target="_blank">Go
          To Site</a>
        <a :href="linkToCode"
          class="md:px-4 py-2 rounded-full border border-custom-black-50 font-semibold uppercase text-sm hover:shadow-lg hover:border-custom-green-100 hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all relative z-[99] text-center block w-full mt-3 lg:mt-0"
          target="_blank">Preview
          Code</a>
      </div>
    </div>
  </div>
</template>