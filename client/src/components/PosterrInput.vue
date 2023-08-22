<template>
  <input :type="props.type" :placeholder="props.placeholder" :name="name" :value="modelValue" v-bind="$attrs" class="border border-purple rounded-md w-full py-1 px-2 outline-purple" @input="updateValue"/>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    }
  })

  const emit = defineEmits('update:modelValue')

  function updateValue (e) {
    emit('update:modelValue', e.target.value)
  }
</script>