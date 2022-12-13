<script setup lang="ts">
type Props = {
  label: string
  modelValue: string | number
  value: string | number
}

const { label, modelValue, value } = defineProps<Props>()

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center">
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      @change="$emit('update:modelValue', value)"
      v-bind="$attrs"
    />
    <label class="text-gray-500 text-xs ml-1" v-if="label">{{ label }}</label>
  </div>
</template>
