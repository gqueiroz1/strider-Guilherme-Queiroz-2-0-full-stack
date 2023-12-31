<template>
  <div class="p-4 bg-white shadow-md rounded-md">
    <div class="flex justify-between items-center mb-3 flex-wrap">
      <div>
        <span class="font-semibold text-sm">{{ post.creator }}</span>
        <span class="ml-4 text-xs text-gray-400">{{ humanizeDate(post.createdAt) }}</span>
      </div>
      <PosterrButton v-if="!isRepost && storeUsers.$state.allowedToPost" label="Repost" @click="openRepostModal"/>
      <span v-else class="text-xs text-gray-600">{{ repostedLabel }}</span>
    </div>
    <div>
      <p class="mt-4 text-gray-800 leading-5 text-sm">{{ post.text }}</p>
    </div>
  </div>

  <PosterrModal v-model="isRepostModalOpen" title="You're about to repost..." :subtitle="modalSubtitle" :on-continue="repost" />
  <PosterrSnackbar ref="repostSnackbar"/>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { humanizeDate } from '../helpers/formatters'
  import { usePostsStore } from '../stores/posts';
  import { useUsersStore } from '../stores/users';
  import PosterrButton from './PosterrButton.vue'
  import PosterrModal from './PosterrModal.vue'
  import PosterrSnackbar from './PosterrSnackbar.vue';
  
  const storePosts = usePostsStore()
  const storeUsers = useUsersStore()

  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const userHaveAlreadyReposted = computed(() => props.post.reposts.includes(storeUsers.$state.defaultUser))

  const isRepost = computed(() => !!props.post.repostedFrom || userHaveAlreadyReposted.value)

  const repostedLabel = computed(() => {
    // displays text when the post is a repost
    if (props.post.repostedFrom) return `Reposted from ${props.post.repostedFrom}`

    // if it is original and reposted by the user, then it shows [Original]
    return `[Original] - Reposted ${props.post.numberOfReposts} times`
  })

  const isRepostModalOpen = ref(false)

  const repostSnackbar = ref(null)

  function openRepostModal () {
    isRepostModalOpen.value = true
  }

  async function repost () {
    try {
      await storePosts.repost(props.post)

      repostSnackbar.value.create(`Awesome! Your post's been created :)`, 'success')
    } catch (e) {
      repostSnackbar.value.create(`Oops! No posts created :/`, 'error')
    } finally {
      isRepostModalOpen.value = false
    }
  }

  const modalSubtitle = computed(() => `Should we repost ${props.post.creator}'s post?`)
</script>