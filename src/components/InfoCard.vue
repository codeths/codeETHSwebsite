<script setup>
defineProps({
  title: String,
  description: String,
  icon: Object
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 p-6">
    <div class="flex justify-center mb-4">
      <div class="bg-eths-orange/10 p-4 rounded-full">
        <component :is="icon" :size="40" class="text-eths-orange" />
      </div>
    </div>
    <h3 class="text-2xl font-bold text-eths-navy mb-3 text-center">{{ title }}</h3>
    <p class="text-gray-600 text-center leading-relaxed">{{ description }}</p>
  </div>
</template>
