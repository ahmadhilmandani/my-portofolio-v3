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
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <iconTailwind />
    <iconNuxt />
  </nav>

  <RouterView />
</template>
