<template>
  <PosterrForm @create-post="createPost" :daily-posts-count="dailyPostsCount"/>
  
  <div class="mt-10">
    <PosterrFilter />
    <div class="mt-10">
      <div v-for="post in posts" :key="post.id" class="mt-10">
        <PosterrCard :post="post"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import PosterrForm from '../components/PosterrForm.vue';
  import PosterrFilter from '../components/PosterrFilter.vue';
  import PosterrCard from '../components/PosterrCard.vue';
  import { ref } from 'vue';

  const dailyPostsCount = ref(2)

  const posts = ref([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor totam eligendi recusandae ullam libero dolorum natus quasi praesentium dolore porro quos officiis fugit, accusamus soluta perferendis aperiam esse consequuntur.',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      creator: 'gqueiroz1',
      repostedFrom: 'jkm777',
      reposts: 0
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor totam eligendi recusandae ullam libero dolorum natus quasi praesentium dolore porro quos officiis fugit, accusamus soluta perferendis aperiam esse consequuntur.',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      creator: 'mark3',
      reposts: 0
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor totam eligendi recusandae ullam libero dolorum natus quasi praesentium dolore porro quos officiis fugit, accusamus soluta perferendis aperiam esse consequuntur.',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      creator: 'mark3',
      repostedFrom: 'jkm777',
      reposts: 0
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor totam eligendi recusandae ullam libero dolorum natus quasi praesentium dolore porro quos officiis fugit, accusamus soluta perferendis aperiam esse consequuntur.',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      creator: 'gqueiroz1',
      reposts: 0
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor totam eligendi recusandae ullam libero dolorum natus quasi praesentium dolore porro quos officiis fugit, accusamus soluta perferendis aperiam esse consequuntur.',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      creator: 'jkm777',
      reposts: 2
    }
  ])

  function createPost ({ postText, postImage }) {
    console.log('createPost', postText, postImage)
    posts.value.push({
      id: 10,
      text: postText,
      image: postImage
    })
    console.log(posts.value)
  }
</script>

<style lang="scss" scoped>

</style>