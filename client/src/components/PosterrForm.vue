<template>
  <div>
    <div class="flex flex-col relative">
      <textarea data-testid="postFormTextarea" name="post" v-model="postText" id="post" cols="30" rows="10" placeholder="Write a new Post" class="border w-full rounded-md p-4 resize-none outline-purple" maxlength="777" />
      <span class="absolute right-2 bottom-2 text-[10px]" :class="charsLengthClass">{{ textareaCount }}/{{ charsLimit }}</span>
    </div>
    <span class="mt-2 text-xs sm:hidden inline-block" :class="remainingPostsLabelClasses">{{ remainingPostsLabel }}</span>
    <div class="flex items-center justify-between mt-3">
      <span class="text-xs hidden sm:inline-block" :class="remainingPostsLabelClasses">{{ remainingPostsLabel }}</span>
      <div v-if="isAbleToPost" class="flex items-center w-full sm:w-auto">
        <PosterrButton id="reset" label="Reset" flat text-color="gray-500" class="mr-2 grow sm:grow-0" @click="erasePost"/>
        <PosterrButton label="Post" @click="createPost" class="grow sm:grow-0"/> 
      </div>
    </div>
  </div>

  <PosterrSnackbar ref="postSnackbar" />
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { usePostsStore } from '../stores/posts';
  import { useUsersStore } from '../stores/users';
  import PosterrButton from './PosterrButton.vue';
  import PosterrSnackbar from './PosterrSnackbar.vue';

  const storePosts = usePostsStore()
  const storeUsers = useUsersStore()

  const props = defineProps({
    dailyPostsCount: {
      type: Number,
      required: true
    }
  })

  const charsLimit = 777

  const postText = ref('')

  const textareaCount = computed(() => postText.value.length)

  const charsLengthClass = computed(() => textareaCount.value == charsLimit ? 'text-red-500' : 'text-gray-500')

  const remainingPostsLabel = computed(() => {
    if (isAbleToPost.value) {
      return `You have ${props.dailyPostsCount} post${props.dailyPostsCount > 1 ? 's' : ''} left! :)`
    } else {
      return 'You can\'t post :/'
    } 
  })

  const remainingPostsLabelClasses = computed(() => isAbleToPost.value ? 'text-gray-500 mr-5' : 'text-red-500')

  /**
   * user can post only 5 times a day
   * so the idea is to get the fifth post time and lock the account
   * the account should unlock at 00:00 on the next day
   * so -> lockDate = 2023/08/20 / unlocks at 2023/08/21 at 00:00
   */
  const isAbleToPost = computed(() => storeUsers.$state.allowedToPost)

  // form actions
  function erasePost () {
    postText.value = ''
  }

  const postSnackbar = ref(null)

  async function createPost () {
    if (!postText.value) return

    try {
      await storePosts.createPost({ text: postText.value })
      postSnackbar.value.create(`Awesome! Your post's been created :)`, 'success')
      erasePost()
    } catch (e) {
      postSnackbar.value.create(`Oops! No posts created :/`, 'error')
    }
  }
</script>