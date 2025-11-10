<script setup>
import { Shield, ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<template>
  <a
    href="https://classroom.google.com/c/MjY4NDU2NDQzNzha?cjc=vjzcli4"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center space-x-3 bg-eths-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <Shield :size="24" class="flex-shrink-0" />
    <span class="text-lg">Join Google Classroom</span>
    <ArrowRight
      :size="20"
      class="transition-transform duration-300 ease-in-out"
      :class="isHovered ? 'translate-x-2' : ''"
    />
  </a>
</template>
