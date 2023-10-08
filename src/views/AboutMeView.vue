<script setup>
import NumberingSection from '../components/numberingSection.vue'
</script>

<template>
  <div class="min-h-screen lg:px-28 pt-28">
    <NumberingSection>
      <template #number>
        1.
      </template>
      <template #title>
        About Me!
      </template>
    </NumberingSection>
  </div>
</template>