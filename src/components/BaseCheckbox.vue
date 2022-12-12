<script setup lang="ts">
type Props = {
  modelValue: boolean
  label: string
}
const { modelValue, label } = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const checked = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const {
      target: { value },
    } = event
    emits('update:modelValue', value)
  }
}
</script>

<template>
  <input type="checkbox" v-model="modelValue" @change="checked" />
  <label v-if="label">{{ label }}</label>
</template>
