<template>
  <div>
    <div class="w-full min-h-screen flex flex-col justify-between items-center pt-24 2xl:pt-40 relative">
      <div class="md:px-16">
        <h3 class="relative z-[5] text-center mt-1 text-xl md:text-4xl lg:text-xl font-normal 2xl:text-4xl" v-motion-slide-top>Hi👋 I’m Ahmad Hilman Dani</h3>
        <h1 class="relative z-[5] text-center mt-1 text-[50px] md:text-[80px] lg:text-[56px] 2xl:text-[92px]" v-motion-slide-top>Frontend Developer</h1>
        <h2 class="hidden md:block relative z-[5] text-center mt-1 md:text-[80px] lg:text-[56px] text-white border-text 2xl:text-[64px]"
          v-motion-slide-top>& UI Designer</h2>
        <h2 class="block md:hidden relative z-[5] text-center mt-1 text-[20px]" v-motion-slide-top>& UI Designer</h2>
      </div>
      <img src="../assets/images/myPhotoLight.png"
        class="absolute bottom-0 w-[83vw] md:h-[80vh] lg:h-[90vh] md:w-auto" alt="" v-motion-slide-bottom>
      <div
        class="w-full md:w-[80vw] lg:w-fit flex flex-wrap justify-center items-center gap-x-3 md:gap-x-7 relative z-[100] bg-custom-beige-50 border-t border-x border-custom-black-50 rounded-t-[40px] p-3 md:py-5 md:px-12"
        v-motion-slide-bottom>
        <div class="flex justify-center items-center gap-2 pr-4">
          <h4 class="text-4xl 2xl:text-6xl">1</h4>
          <p class="2xl:text-2xl">Year using React Js <br> or Vue Js</p>
        </div>
        <div class="h-7 w-[0.5px] bg-custom-black-50"></div>
        <div class="flex justify-center items-center gap-2 pr-4">
          <h4 class="text-4xl 2xl:text-6xl">1</h4>
          <p class="2xl:text-2xl">Year in <br>UI Design</p>
        </div>
        <div class="hidden md:block h-7 w-[0.5px] bg-custom-black-50"></div>
        <div class="hidden md:flex justify-center items-center gap-2 pr-4">
          <h4 class="text-4xl 2xl:text-6xl">3</h4>
          <p class="2xl:text-2xl">Years in hope that figma <br> would still be free after the <br> Adobe acquisition 😁</p>
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-col justify-center items-center py-14 md:py-16 px-4 md:px-24 lg:px-40 bg-custom-black-50">
      <h1 class="text-custom-beige-50 font-normal text-2xl 2xl:text-4xl text-center leading-[175%] 2xl:leading-[200%]" v-motion-fade-visible>
        “ Saya diberikan kenikmatan oleh Allah ilmu technology sehingga saya bisa membuat pesawat terbang, tapi sekarang
        saya
        tahu bahwa <span class="text-custom-green-100 font-semibold text-2xl 2xl:text-4xl">ilmu agama itu lebih bermanfaat untuk
          umat.</span> Kalo saya disuruh memilih antara keduanya maka <span
          class="text-custom-green-100 font-semibold text-2xl 2xl:text-4xl">saya akan
          memilih ilmu Agama.</span>”
      </h1>
      <div class="mt-6 italic text-base 2xl:text-2xl text-custom-beige-50" v-motion-slide-visible-bottom>- Bacharuddin Jusuf Habibie
        -</div>
    </div>
  </div>
</template>

<style>
.border-text {
  text-shadow: 0 0 2px #23252A
}</style>