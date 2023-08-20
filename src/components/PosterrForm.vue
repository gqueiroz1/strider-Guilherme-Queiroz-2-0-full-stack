<template>
  <div>
    <div class="flex flex-col relative">
      <textarea name="post" v-model="postText" id="post" cols="30" rows="10" placeholder="Write a new Post" class="border w-full rounded-md p-4 resize-none outline-purple" maxlength="777" />
      <span class="absolute right-2 bottom-2 text-[10px]" :class="charsLengthClass">{{ textareaCount }}/{{ charsLimit }}</span>
    </div>
    <span class="mt-2 text-xs sm:hidden inline-block" :class="remainingPostsLabelClasses">{{ remainingPostsLabel }}</span>
    <div class="flex justify-between items-center mt-3">
      <PosterrButton v-if="isAbleToPost && !selectedImageName" label="Add image" @click="openImageInput"/>
      <div v-if="selectedImageName" class="flex items-center">
        <PosterrIcon name="remove" icon-size="16px" @click="removeSelectedImage" fill="red" class="pl-0 cursor-pointer"/> 
        <span class="text-gray-600 text-sm truncate w-20 text-ellipsis">{{ selectedImageName }}</span>
      </div>
      <input type="file" ref="imageInput" class="hidden" @change="createSelectedImage">
      <div class="flex items-center">
        <span class="text-xs hidden sm:inline-block" :class="remainingPostsLabelClasses">{{ remainingPostsLabel }}</span>
        <div v-if="isAbleToPost" class="flex items-center">
          <PosterrButton label="Reset" flat text-color="gray-500" class="mr-2" @click="erasePost"/>
          <PosterrButton label="Post" @click="createPost"/> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import PosterrButton from './PosterrButton.vue';
  import PosterrIcon from './PosterrIcon.vue';

  const props = defineProps({
    dailyPostsCount: {
      type: Number,
      required: true
    }
  })

  const emit = defineEmits('createPost')

  const charsLimit = 777

  const postText = ref('')

  const imageURL = ref('https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX')

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

  const isAbleToPost = computed(() => props.dailyPostsCount > 0)

  // form actions
  const imageInput = ref(null)

  const selectedImageName = ref(null)

  function erasePost () {
    postText.value = ''
  }

  function createPost () {
    if (!postText.value) return

    emit('createPost', { postText: postText.value, postImage: imageURL.value })
  }

  function openImageInput () {
    imageInput.value.click()
  }

  function createSelectedImage (e) {
    console.log(e.target.files[0])
    selectedImageName.value = e.target.files[0].name
  }

  function removeSelectedImage () {
    selectedImageName.value = null
    imageInput.value.value = null
  }
</script>