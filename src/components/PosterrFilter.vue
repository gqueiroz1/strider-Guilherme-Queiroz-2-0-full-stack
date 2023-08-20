<template>
  <div class="flex gap-2 items-center flex-wrap sm:flex-nowrap">
    <PosterrInput placeholder="Search posts" class="w-full"/>
    <PosterrSelect name="sortSelect" v-model="selectedOption" :options="sortSelectOptions" class="w-full sm:w-auto"/>
    <PosterrButton icon="search" icon-color="purple" flat dense class="hidden sm:inline-block"/>
    <PosterrButton icon="search" icon-color="white" dense class="sm:hidden w-full"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import PosterrInput from './PosterrInput.vue';
  import PosterrSelect from './PosterrSelect.vue';
  import PosterrButton from './PosterrButton.vue';

  const selectedOption = ref('latest')

  const sortSelectOptions = [{ label: 'Latest', value: 'latest' }, { label: 'Trending', value: 'trending' }]
</script>