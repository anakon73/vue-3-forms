<script setup lang="ts"></script>

<template>
  <div class="font-sans p-2 mx-auto w-[300px]">
    <nav class="text-center p-[30px]">
      <router-link
        class="font-bold text-5xl text-slate-700"
        active-class="text-emerald-400"
        to="/"
        >Form</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
