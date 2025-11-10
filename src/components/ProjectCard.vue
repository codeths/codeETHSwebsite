<script setup>
import { Github } from 'lucide-vue-next'

defineProps({
  name: String,
  description: String,
  techStack: Array,
  githubUrl: String,
  featured: {
    type: Boolean,
    default: false
  },
  badge: String
})
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 p-6 border-t-4"
    :class="featured ? 'border-eths-orange' : 'border-eths-navy'"
  >
    <div class="flex justify-between items-start mb-4">
      <div class="flex-1">
        <h3 class="text-2xl font-bold text-eths-navy mb-2">{{ name }}</h3>
        <span
          v-if="badge"
          class="inline-block px-3 py-1 bg-eths-orange text-white text-xs font-semibold rounded-full"
        >
          {{ badge }}
        </span>
      </div>
      <a
        v-if="githubUrl"
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 hover:text-eths-orange transition-colors duration-300 ml-4 flex-shrink-0"
      >
        <Github :size="24" />
      </a>
    </div>

    <p class="text-gray-600 leading-relaxed mb-4">{{ description }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in techStack"
        :key="tech"
        class="px-3 py-1 bg-eths-blue text-white text-sm font-medium rounded-full"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
