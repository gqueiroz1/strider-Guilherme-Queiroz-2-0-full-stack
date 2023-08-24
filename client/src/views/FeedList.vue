<template>
  <PosterrForm :daily-posts-count="storeUsers.$state.postsLeft"/>
  
  <div class="mt-10">
    <PosterrFilter />
    <div class="mt-10">
      <TransitionGroup>
        <div v-for="post in storePosts.getPosts" :key="post._id" class="mt-10">
          <PosterrCard :post="post"/>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { usePostsStore } from '../stores/posts';
  import { useUsersStore } from '../stores/users';
  import PosterrForm from '../components/PosterrForm.vue';
  import PosterrFilter from '../components/PosterrFilter.vue';
  import PosterrCard from '../components/PosterrCard.vue';

  const storePosts = usePostsStore()
  const storeUsers = useUsersStore()

  onMounted(() => {
    storePosts.fetchPosts()
    storeUsers.validateUserCanPost()
  })
</script>
