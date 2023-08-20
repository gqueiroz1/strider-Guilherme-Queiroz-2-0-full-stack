<template>
  <div class="p-4 bg-white shadow-md rounded-md">
    <div class="flex justify-between items-center mb-3">
      <div>
        <span class="font-semibold text-sm">{{ post.creator }}</span>
        <span class="ml-4 text-xs text-gray-400">{{ post.createdAt }}</span>
      </div>
      <PosterrButton v-if="!isRepost" label="Repost"/>
      <span v-else class="text-xs text-gray-600">{{ repostedLabel }}</span>
    </div>
    <div>
      <div class="h-80 overflow-hidden relative">
        <img :src="post.image" alt="image" class="rounded-md w-full h-80 object-cover">
      </div>
      <p class="mt-4 text-gray-800 leading-5 text-sm">{{ post.text }}</p>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import PosterrButton from './PosterrButton.vue'

  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const isRepost = computed(() => !!props.post.repostedFrom)

  const repostedLabel = computed(() => `Reposted from ${props.post.repostedFrom}`)
</script>