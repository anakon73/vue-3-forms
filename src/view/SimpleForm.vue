<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
]
const event = ref({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 1,
  extras: {
    catering: false,
    music: false,
  },
})
</script>

<template>
  <div class="mb-4">
    <BaseSelect
      label="Category"
      :options="categories"
      v-model="event.category"
    />
  </div>
  <div class="mb-8">
    <h3 class="text-[19px] font-bold mb-5">Name & describe your event</h3>
    <BaseInput class="mb-4" v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Description" type="text" />
  </div>
  <div class="mb-8">
    <h3 class="text-[19px] font-bold mb-5">Where is your event?</h3>
    <BaseInput v-model="event.location" label="Location" type="text" />
  </div>
  <div>
    <h3 class="text-[19px] font-bold mb-5">Extras</h3>
    <BaseCheckbox
      class="mb-2"
      label="Catering"
      v-model="event.extras.catering"
    />
    <BaseCheckbox label="Live music" v-model="event.extras.music" />
  </div>
</template>
