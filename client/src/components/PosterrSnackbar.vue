<template>
  <Transition>
    <div v-if="isSnackbarOpen" ref="snackbar" class="p-4 rounded-md fixed bottom-5 right-5 z-20 text-white font-normal" :class="classes">
      {{message}}
    </div>
  </Transition>
</template>

<script setup>
  import { ref, defineExpose, computed, watch, onUnmounted } from 'vue'

  const message = ref('')
  const snackbarType = ref('')
  const isSnackbarOpen = ref(false)

  let timeout = null

  const classes = computed(() => {
    return {
      'bg-green-500': snackbarType.value === 'success',
      'bg-red-500': snackbarType.value === 'error'
    }
  })
  
  function create (msg, type) {
    message.value = msg
    snackbarType.value = type
    isSnackbarOpen.value = true
  }

  watch(isSnackbarOpen, () => {
    timeout = setTimeout(() => isSnackbarOpen.value = false, 2000)
  })

  onUnmounted(() => {
    clearTimeout(timeout)
  })

  defineExpose({ create })
</script>
