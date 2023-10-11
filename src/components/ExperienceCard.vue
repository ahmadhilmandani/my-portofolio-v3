<script setup>
const props = defineProps(['linkHref'])
</script>

<template>
  <div class="lg:flex w-fit gap-3 lg:gap-16 items-center relative z-50">
    <slot name="thumbnail"></slot>
    <div class="max-w-[380px] 2xl:max-w-[560px] w-full">
      <h1 class="text-lg 2xl:text-4xl font-semibold text-center lg:text-start mt-4 lg:mt-0">
        <slot name="title"></slot>
      </h1>
      <p class="my-4 2xl:text-2xl 2xl:my-8">
        <slot name="content"></slot>
      </p>
      <div class="flex gap-2 mb-8">
        <strong>Skills: </strong>
        <slot name="skills"></slot>
      </div>
      <a :href="linkHref"
        class="py-2 rounded-full bg-gradient-to-r from-custom-green-100 to-custom-green-50 font-semibold uppercase text-sm hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all text-center block w-full 2xl:text-2xl"
        target="_blank">Detail</a>
    </div>
  </div>
</template>