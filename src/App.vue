<template>
  <PosterrHeader ref="posterrHeader"/>

  <div class="max-w-5xl m-auto" :style="contentSpacing">
    <RouterView />
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import PosterrHeader from './components/PosterrHeader.vue';

  const posterrHeader = ref(null)

  const contentSpacing = computed(() => `padding-top: ${posterrHeader?.value?.$el.clientHeight + 40}px`)
</script>
