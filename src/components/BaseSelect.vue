<script setup lang="ts">
type Props = {
  label: string
  modelValue: string
  options: string[]
}

const { label, modelValue, options } = defineProps<Props>()

const emits = defineEmits(['update:modelValue'])

const selectCategory = (event: Event) => {
  if (event.target instanceof HTMLSelectElement) {
    let {
      target: { value },
    } = event
    emits('update:modelValue', value)
  }
}
</script>

<template>
  <label class="block text-sm font-medium text-gray-500 mb-[1px]" v-if="label"
    >Select a category</label
  >
  <select
    class="border border-gray-300 rounded-sm focus:border-emerald-600 focus: outline-none p-1 w-full"
    :value="modelValue"
    @change="selectCategory"
    v-bind="$attrs"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
