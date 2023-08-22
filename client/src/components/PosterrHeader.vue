<template>
  <header ref="posterrHeader" class="posterr-header fixed w-full flex justify-between items-center py-4 px-4 lg:px-10 shadow-sm shadow-purple-light bg-purple z-10">
    <h1 class="posterr-header__logo text-2xl lg:text-4xl font-extrabold text-white cursor-pointer" @click="goToFeed">Posterr</h1>
    <span class="text-white text-sm lg:text-base">Hi, {{ storeUsers.$state.defaultUser }}</span>
  </header>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useUsersStore } from '../stores/users';

  const storeUsers = useUsersStore()

  const router = useRouter()
  const goToFeed = () => router.push({ name: 'Feed' })
</script>