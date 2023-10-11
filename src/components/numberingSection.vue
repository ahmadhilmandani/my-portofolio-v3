<template>
  <div class="flex gap-4 items-center relative px-0 md:px-24 lg:px-0">
    <h1 class="text-4xl md:text-6xl relative">
      <slot name="number" class="relative z-50">1.</slot>
      <div
        class="w-[40px] md:w-[52px] h-10 md:h-12 bg-gradient-to-r from-custom-green-100 to-custom-green-50 rounded-xl absolute z-[-1] -bottom-5 -left-1">
      </div>
    </h1>
    <h1 class="text-4xl md:text-6xl relative z-[20]">
      <slot name="title">About Me</slot>
    </h1>
  </div>
</template>
