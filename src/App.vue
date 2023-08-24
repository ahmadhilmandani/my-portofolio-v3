<script>
import { RouterLink, RouterView } from 'vue-router'
import iconTailwind from './components/icons/iconTailwind.vue';
import iconNuxt from './components/icons/iconNuxt.vue';

export default {
  setup() {
    

  },
  components: {
    iconTailwind,
    iconNuxt
  }
}
</script>

<template>
  <nav class="bg-red-50 w-full h-16 border-b border-b-custom-beige-100">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <iconTailwind />
    <iconNuxt />
  </nav>

  <RouterView />
</template>
