<script setup>
import { ref } from 'vue';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconMenu2, IconX } from '@tabler/icons-vue'
import HomeView from './views/HomeView.vue'
import AboutMeView from './views/AboutMeView.vue';
import ExperienceView from './views/ExperienceView.vue';
import PersonalProjectView from './views/PersonalProjectView.vue';
import Footer from './views/Footer.vue';

function setIconColorBlack(elementId) {
  document.getElementById(elementId).setAttribute('stroke', '#23252A')
}

function setIconColorBeige(elementId) {
  document.getElementById(elementId).setAttribute('stroke', '#F5F4EF')
}

const openMenuHumbergur = ref(false)
</script>

<template>
  <!-- aside navigation -->
  <aside class="w-full hidden fixed bottom-0 px-8 md:flex justify-between items-end" v-motion-slide-bottom>
    <div class="grid grid-rows-4 grid-cols-1 gap-7">
      <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank"
        class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all"
        @mouseenter="() => { setIconColorBlack('email') }" @mouseleave="() => { setIconColorBeige('email') }">
        <IconMail size="20" stroke-width="2" color="#F5F4EF" id="email" />
      </a>
      <a href="https://github.com/ahmadhilmandani" target="_blank"
        class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all"
        @mouseenter="() => { setIconColorBlack('github') }" @mouseleave="() => { setIconColorBeige('github') }">
        <IconBrandGithub size="20" stroke-width="2" color="#F5F4EF" id="github" />
      </a>
      <a href="https://www.linkedin.com/in/ahmad-hilman-dani/" target="_blank"
        class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all"
        @mouseenter="() => { setIconColorBlack('linkedin') }" @mouseleave="() => { setIconColorBeige('linkedin') }">
        <IconBrandLinkedin size="20" stroke-width="2" color="#F5F4EF" id="linkedin" />
      </a>
      <a href="https://www.instagram.com/ahmadhilmandani/" target="_blank"
        class="bg-custom-beige-100 rounded-lg p-2 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-custom-green-50 hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all"
        @mouseenter="() => { setIconColorBlack('instagram') }" @mouseleave="() => { setIconColorBeige('instagram') }">
        <IconBrandInstagram size="20" stroke-width="2" color="#F5F4EF" id="instagram" />
      </a>
      <div class="w-[1.8px] h-56 bg-custom-beige-100 mx-auto"></div>
    </div>
    <div class="grid grid-rows-1 grid-cols-1 gap-7">
      <div class="vertical-text text-custom-beige-50 rounded-lg px-2 py-4 bg-custom-beige-100" @click="greet">
        Portofolio website of Ahmad Hilman Dani
      </div>
      <div class="w-[1.8px] h-56 bg-custom-beige-100 mx-auto"></div>
    </div>
  </aside>


  <!-- top navigation -->
  <nav
    class="w-full h-[60px] flex justify-between items-center px-10 md:px-20 lg:px-28 bg-custom-beige-50 border-b border-b-custom-black-50 fixed top-0 left-0 right-0 z-[1000]">
    <a href="#home">
      <div class="flex items-center gap-2">
        <svg width="16" height="33" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.47754 7.82878e-07L0 0L-3.05609e-06 17.4788L20.9745 17.4788L20.9746 3.66731e-06L16.5538 2.89436e-06L16.5538 13.5458L4.47754 13.5458L4.47754 7.82878e-07Z"
            fill="#23252A" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.47448 35.5767L3.24253e-05 38.7727L3.79578e-05 19.1229L21 19.1229L21 38.7767L20.9845 38.7767L16.5507 35.5745L16.5507 23.9329L4.47448 23.9329L4.47448 35.5767Z"
            fill="#23252A" />
        </svg>
        <h1 class="text-2xl">hilman</h1>
      </div>
    </a>
    <div class="hidden md:flex md:gap-x-10 lg:gap-x-16 items-center">
      <a href="#home" class="visited :bg-red-500">Home</a>
      <a href="#about">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#personalProjects">Personal Projects</a>
      <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank"
        class="md:px-4 md:py-2 rounded-full bg-gradient-to-r from-custom-green-100 to-custom-green-50 font-semibold uppercase text-sm hover:shadow-lg hover:shadow-custom-green-100/50 shadow- hover:-translate-y-1 transition-all">Contact</a>
    </div>
    <div class='md:hidden block'>
      <IconMenu2 id='humbergur-icon' @click="() => { openMenuHumbergur = true }" />
    </div>
  </nav>

  <!-- sidebar menu when in mobile -->
  <div :class="openMenuHumbergur ? 'block' : 'hidden'"
    class='max-w-[360px] w-[70%] h-full fixed top-0 bottom-0 right-0 bg-white p-10 z-[1002]'>
    <div class='flex justify-end' id='close' @click="() => { openMenuHumbergur = false }">
      <IconX />
    </div>
    <div>
      <a @click="() => { openMenuHumbergur = false }" href="#home"
        class='block text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Home</a>
      <a @click="() => { openMenuHumbergur = false }" href="#about"
        class='block text-sm hover:-translate-y-1 transition ease-in-out duration-300 my-10'>About
        me</a>
      <a @click="() => { openMenuHumbergur = false }" href="#experience"
        class='block text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Experience</a>
      <a @click="() => { openMenuHumbergur = false }" href="#personalProjects" class="block mt-10 text-sm">Personal
        Projects</a>
      <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank" class='block my-10'>
        <IconMail size="20" stroke-width="2" class="stroke-custom-black-50" />
      </a>
      <a href="https://github.com/ahmadhilmandani" target="_blank" class='block'>
        <IconBrandGithub size="20" stroke-width="2" class="stroke-custom-black-50" />
      </a>
      <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" target="_blank" class='block my-10'>
        <IconBrandLinkedin size="20" stroke-width="2" class="stroke-custom-black-50" />
      </a>
      <a href="https://www.instagram.com/ahmadhilmandani/" target="_blank" class='block'>
        <IconBrandInstagram size="20" stroke-width="2" class="stroke-custom-black-50" />
      </a>
    </div>
  </div>

  <!-- the dark background of sidebar menu when in mobile -->
  <div :class="openMenuHumbergur ? 'block' : 'hidden'"
    class="fixed top-0 left-0 right-0 bottom-0 z-[1001] bg-custom-black-50/60" v-motion-fade-visible
    @click="() => { openMenuHumbergur = false }">
  </div>

  <!-- main contenct -->
  <main class="scroll-container">
    <HomeView id="home" />
    <AboutMeView id="about" />
    <ExperienceView id="experience" />
    <PersonalProjectView id="personalProjects" />
  </main>

  <!-- footer -->
  <Footer />
</template>

<style>
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}

html {
  scroll-behavior: smooth;
}
</style>
