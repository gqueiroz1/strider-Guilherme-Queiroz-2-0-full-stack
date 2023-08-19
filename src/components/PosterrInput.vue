<template>
  <input :type="props.type" :placeholder="props.placeholder" :name="name" :value="selectedOption" v-bind="$attrs" class="border border-purple rounded-md w-full py-1 px-2 outline-purple" />
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    }
  })
</script>