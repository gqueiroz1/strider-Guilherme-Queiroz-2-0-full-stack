<template>
  <div class="flex gap-2 items-center">
    <PosterrInput placeholder="Search posts"/>
    <PosterrSelect name="sortSelect" v-model="selectedOption" :options="sortSelectOptions" />
    <PosterrButton icon="search" icon-color="purple" flat dense/>
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

<style lang="scss" scoped>

</style>