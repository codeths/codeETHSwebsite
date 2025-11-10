<script setup>
import { Github } from 'lucide-vue-next'

defineProps({
  name: String,
  description: String,
  techStack: Array,
  githubUrl: String
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 p-6">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-2xl font-bold text-eths-navy">{{ name }}</h3>
      <a
        v-if="githubUrl"
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 hover:text-eths-orange transition-colors duration-300"
      >
        <Github :size="24" />
      </a>
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tech in techStack"
        :key="tech"
        class="px-3 py-1 bg-eths-blue/10 text-eths-blue text-sm font-medium rounded-full"
      >
        {{ tech }}
      </span>
    </div>

    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>
