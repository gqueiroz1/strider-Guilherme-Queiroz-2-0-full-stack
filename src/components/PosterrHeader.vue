<template>
  <header ref="posterrHeader" class="posterr-header fixed w-full flex justify-between items-center py-4 px-10 shadow-sm shadow-purple-light bg-purple">
    <h1 class="posterr-header__logo text-4xl font-extrabold text-white cursor-pointer" @click="goToFeed">Posterr</h1>
    <span class="text-white">Hi, gqueiroz1</span>
  </header>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const goToFeed = () => router.push({ name: 'Feed' })
</script>