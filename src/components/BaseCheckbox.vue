<script setup lang="ts">
type Props = {
  label: string

  modelValue: boolean
}
const { label, modelValue } = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const checked = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const {
      target: { checked },
    } = event
    emits('update:modelValue', checked)
  }
}
</script>

<template>
  <div class="flex items-center">
    <input
      class="mr-2"
      type="checkbox"
      :checked="modelValue"
      @change="checked"
    />
    <label class="text-sm font-medium text-gray-500 mb-[1px]" v-if="label">{{
      label
    }}</label>
  </div>
</template>
