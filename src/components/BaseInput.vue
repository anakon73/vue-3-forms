<script setup lang="ts">
interface Props {
  label: string
  modelValue: [string, number]
}
const { label, modelValue } = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    let {
      target: { value },
    } = event
    emits('update:modelValue', value)
  }
}
</script>

<template>
  <label class="block text-sm font-medium text-gray-500 mb-[1px]">{{
    label
  }}</label>
  <input
    v-bind="$attrs"
    class="border border-gray-300 rounded-sm focus:outline-blue-900 p-1 w-full placeholder:text-gray-500"
    :placeholder="label"
    :value="modelValue"
    @input="updateValue"
  />
</template>
