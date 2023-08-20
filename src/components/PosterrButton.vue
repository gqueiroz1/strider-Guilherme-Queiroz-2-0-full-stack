<template>
  <button :class="classes" class="rounded-md flex justify-center items-center">
    <PosterrIcon v-if="icon" class="cursor-pointer" :name="icon" :fill="iconColor" bg-color="white" icon-size="20px" />    
    {{ label }}
  </button>
</template>

<script setup>
  import { computed, defineProps } from 'vue';
  import PosterrIcon from './PosterrIcon.vue';

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'purple'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    flat: {
      type: Boolean
    },
    dense: {
      type: Boolean
    },
    icon: {
      type: String
    },
    iconColor: {
      type: String
    }
  })

  const classes = computed(() => {
    return [
      `text-${props.textColor}`,
      `${!props.flat ? `bg-${props.bgColor}` : 'bg-transparent'}`,
      `${props.dense ? 'p-1' : 'p-2'}`
    ]
  })
</script>

<style lang="scss" scoped>

</style>