<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav
    class="w-full h-[70px] flex justify-between items-center lg:px-20 bg-custom-beige-50 border-b border-b-custom-black-50 fixed top-0 left-0 right-0 z-[1000]">
    <div class="flex items-center gap-2">
      <svg width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.47754 7.82878e-07L0 0L-3.05609e-06 17.4788L20.9745 17.4788L20.9746 3.66731e-06L16.5538 2.89436e-06L16.5538 13.5458L4.47754 13.5458L4.47754 7.82878e-07Z"
          fill="#23252A" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.47448 35.5767L3.24253e-05 38.7727L3.79578e-05 19.1229L21 19.1229L21 38.7767L20.9845 38.7767L16.5507 35.5745L16.5507 23.9329L4.47448 23.9329L4.47448 35.5767Z"
          fill="#23252A" />
      </svg>
      <h1 class="text-2xl">hilman</h1>
    </div>
    <div class="flex lg:gap-x-16 items-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About Me</RouterLink>
      <RouterLink to="/about">Experience</RouterLink>
      <a href=""
        class="lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-custom-green-100 to-custom-green-50 font-semibold uppercase text-sm">Contact</a>
    </div>
  </nav>

  <RouterView />
</template>
