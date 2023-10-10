<script setup>
const props = defineProps(['linkHref'])
</script>

<template>
  <div class="lg:flex w-full gap-3 lg:gap-16 items-center">
    <slot name="thumbnail"></slot>
    <div class="max-w-[380px] w-full">
      <h1 class="text-lg font-semibold text-center lg:text-start mt-4 lg:mt-0">
        <slot name="title"></slot>
      </h1>
      <p class="my-4">
        <slot name="content"></slot>
      </p>
      <div class="flex gap-2 mb-8">
        <strong>Skills: </strong>
        <slot name="skills"></slot>
      </div>
      <a :href="linkHref"
        class="py-2 rounded-full bg-gradient-to-r from-custom-green-100 to-custom-green-50 font-semibold uppercase text-sm hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all relative z-[99] text-center block w-full"
        target="_blank">Detail</a>
    </div>
  </div>
</template>