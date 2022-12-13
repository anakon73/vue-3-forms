<script setup lang="ts">
interface option {
  label: string
  value: number | boolean
}

type Props = {
  options: option[]
  name: string
  modelValue: string | number
  vertical?: boolean
}
const { options, name, modelValue, vertical } = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emits('update:modelValue', event)
}
</script>

<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
    }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="updateValue"
    />
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
