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
const petOptions = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 },
]
</script>

<template>
  <h1 class="mb-4 text-center text-4xl font-bold text-slate-600">
    Create an event
  </h1>
  <div class="mb-4">
    <BaseSelect
      label="Category"
      :options="categories"
      v-model="event.category"
    />
  </div>
  <div class="mb-4">
    <h3 class="text-[19px] font-bold mb-5 text-slate-600">
      Name & describe your event
    </h3>
    <BaseInput class="mb-4" v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Description" type="text" />
  </div>
  <div class="mb-4">
    <h3 class="text-[19px] font-bold mb-5 text-slate-600">
      Where is your event?
    </h3>
    <BaseInput v-model="event.location" label="Location" type="text" />
  </div>
  <div class="mb-4">
    <h3 class="text-[19px] font-bold mb-5 text-slate-600">Extras</h3>
    <BaseCheckbox
      class="mb-2"
      label="Catering"
      v-model="event.extras.catering"
    />
    <BaseCheckbox label="Live music" v-model="event.extras.music" />
  </div>
  <div class="mb-6">
    <h3 class="text-[19px] font-bold mb-5 text-slate-600">Are pets allowed?</h3>
    <BaseRadioGroup
      v-model="event.pets"
      name="pets"
      :options="petOptions"
      vertical
    />
  </div>
  <div class="text-center">
    <button
      type="submit"
      class="transition-all duration-[400ms] py py-3 px-6 rounded-full font-bold text-white bg-green-400 hover:bg-green-500 hover:scale-105"
    >
      Submit
    </button>
  </div>
</template>
