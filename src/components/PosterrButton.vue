<template>
  <button :class="classes" class="rounded-md">{{ label }}</button>
</template>

<script setup>
  import { computed, defineProps } from 'vue';

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
    }
  })

  const classes = computed(() => {
    console.log(props.textColor)
    return [
      `text-${props.textColor}`,
      `${!props.flat ? `bg-${props.bgColor}` : 'bg-transparent'}`,
      `${props.dense ? 'p-1' : 'p-2'}`
    ]
  })
</script>

<style lang="scss" scoped>

</style>