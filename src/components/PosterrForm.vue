<template>
  <div>
    <div class="flex flex-col relative">
      <textarea name="post" v-model="postText" id="post" cols="30" rows="10" placeholder="Write a new Post" class="border w-full rounded-md p-4 resize-none outline-purple" maxlength="777" />
      <span class="absolute right-2 bottom-2 text-[10px] text-gray-500">{{ textareaCount }}/777</span>
    </div>
    <div class="flex justify-between items-center mt-3">
      <PosterrButton label="Add image"/>
      <div>
        <span class="mr-5 text-xs text-gray-500">You have 5 posts left! :)</span>
        <PosterrButton label="Reset" flat text-color="gray-500" class="mr-2"/>
        <PosterrButton label="Post"/> 
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import PosterrButton from './PosterrButton.vue';

  const postText = ref('')

  const textareaCount = computed(() => postText.value.length)
</script>

<style lang="scss" scoped>

</style>