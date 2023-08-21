<template>
  <div class="posterr-select cursor-pointer relative" ref="posterrSelect">
    <!-- <z-input :name="name" :value="selectedOption" :icon="icon" v-bind="$attrs" @click.native="handleArrowClick" class="z-select__input" /> -->
    <PosterrInput :name="props.name" :value="selectedOption" @click="handleClick"/>

    <div v-if="isMenuOpen" class="posterr-select__menu absolute rounded-md bg-white text-purple w-full mt-2 overflow-y-scroll shadow-md">
      <div v-for="(option, index) in props.options" :key="index" @click="setOptionSelected(option)">
        <div class="border-solid border-1 p-4 font-bold cursor-pointer hover:bg-purple hover:text-white">
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core'
  import PosterrInput from './PosterrInput.vue';

  const props = defineProps({
    name: {
      type: String
    },
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  })

  // options control
  // selected value
  const selectedOption = computed({
    get() {
      return props.options.find(option => option.value === props.modelValue)?.label || ''
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })

  function setOptionSelected (option) {
    selectedOption.value = option.value
    hideMenu()
  }

  // menu control
  const isMenuOpen = ref(false)

  const posterrSelect = ref(null)

  onClickOutside(posterrSelect, () => hideMenu())

  function openMenu () {
    isMenuOpen.value = true
  }

  function hideMenu () {
    isMenuOpen.value = false
  }
  
  function handleClick () {
    if (isMenuOpen.value) hideMenu()
    else openMenu()
  }
  
  // custom events
  const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
  .posterr-select {
    &__menu {
      max-height: 200px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>