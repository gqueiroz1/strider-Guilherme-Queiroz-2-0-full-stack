<template>
  <div class="rounded-full hover:ease-linear" v-bind="$attrs" :class="classes">
    <svg :fill="fill" :width="iconWidth" :height="iconHeight">
      <use :href="`${icons}#${name}`" />
    </svg>
  </div>
</template>

<script setup>
  import icons from '@/assets/icons/icons.svg'
  import { computed } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    iconSize: {
      type: [Object, String],
      default: () => ({
        width: '20px',
        height: '20px'
      })
    },
    iconClasses: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'bg-white'
    },
    fill: {
      type: String,
      default: 'purple'
    }
  })

  // icon attributes
  const iconWidth = computed(() => props.iconSize.width || props.iconSize)

  const iconHeight = computed(() => props.iconSize.height || props.iconSize)

  const classes = computed(() => props.iconClasses + ` fill-${props.fill} ${props.bgColor} p-2`)
</script>