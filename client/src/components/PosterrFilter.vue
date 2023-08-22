<template>
  <div class="flex gap-2 items-center flex-wrap sm:flex-nowrap">
    <PosterrInput v-model="textFilter" placeholder="Search posts" class="w-full"/>
    <PosterrSelect name="sortSelect" v-model="selectedOption" :options="sortSelectOptions" class="w-full sm:w-auto"/>
    <PosterrButton icon="search" icon-color="purple" flat dense class="hidden sm:inline-block" @click="filter"/>
    <PosterrButton icon="search" icon-color="white" dense class="sm:hidden w-full" @click="filter"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { usePostsStore } from '../stores/posts';
  import PosterrInput from './PosterrInput.vue';
  import PosterrSelect from './PosterrSelect.vue';
  import PosterrButton from './PosterrButton.vue';

  const storePosts = usePostsStore()

  const textFilter = ref('')
  const selectedOption = ref('latest')

  const sortSelectOptions = [{ label: 'Latest', value: 'latest' }, { label: 'Trending', value: 'trending' }]

  function filter () {
    const query = `${textFilter.value ? `text=${textFilter.value}&` : ''}sort=${selectedOption.value}`

    console.log(textFilter.value, query)

    storePosts.fetchPosts(query)
  }
</script>