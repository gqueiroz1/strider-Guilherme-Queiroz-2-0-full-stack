<template>
  <div v-if="modelValue" @click.self="closeModal" class="fixed flex justify-center items-center z-20 top-0 left-0 w-full h-screen bg-opacity-30 bg-black px-5">
    <div class="p-5 sm:p-10 bg-white rounded-md">
      <slot name="title">
        <h2 class="text-xl mb-3">{{ title }}</h2>
      </slot>

      <div v-if="subtitle">
        <slot name="subtitle">
          <p>{{ subtitle }}</p>
        </slot>
      </div>
      
      <div class="flex items-center justify-end gap-3 mt-10">
          <slot name="actions">
          <PosterrButton flat label="Cancel" text-color="gray-500" @click="cancelAction"/> 
          <PosterrButton label="Continue" @click="continueAction"/>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import PosterrButton from './PosterrButton.vue';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    onContinue: {
      type: [Boolean, Function],
      default: false
    },
    onCancel: {
      type: [Boolean, Function],
      default: false
    },
    modelValue: {
      type: Boolean
    }
  })

  const emit = defineEmits('update:modelValue')

  function closeModal () {
    emit('update:modelValue', false)
  }

  function cancelAction () {
    if (props.onCancel) return props.onCancel()

    return closeModal()
  }

  function continueAction () {
    if (props.onContinue) return props.onContinue()

    return closeModal()
  }
</script>
