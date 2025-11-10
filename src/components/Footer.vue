<script setup>
import { Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-eths-navy text-white py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-lg font-semibold">CodeETHS</p>
          <p class="text-gray-300 text-sm">Student Developers at ETHS</p>
        </div>

        <div class="flex items-center space-x-6">
          <a
            href="https://github.com/Pogo-Bash"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 hover:text-eths-orange transition-colors duration-300"
          >
            <Github :size="24" />
            <span class="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-600 text-center text-gray-300 text-sm">
        <p>&copy; 2025 CodeETHS - ETHS. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
