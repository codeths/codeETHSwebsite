<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-eths-navy sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="text-white text-2xl font-bold hover:text-eths-orange transition-colors duration-300">
          CodeETHS
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="text-white hover:text-eths-orange transition-colors duration-300 font-medium"
            active-class="text-eths-orange"
          >
            Home
          </router-link>
          <router-link
            to="/projects"
            class="text-white hover:text-eths-orange transition-colors duration-300 font-medium"
            active-class="text-eths-orange"
          >
            Projects
          </router-link>
          <router-link
            to="/about"
            class="text-white hover:text-eths-orange transition-colors duration-300 font-medium"
            active-class="text-eths-orange"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="text-white hover:text-eths-orange transition-colors duration-300 font-medium"
            active-class="text-eths-orange"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-eths-orange transition-colors duration-300"
        >
          <Menu v-if="!mobileMenuOpen" :size="28" />
          <X v-else :size="28" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 space-y-2"
      >
        <router-link
          to="/"
          @click="toggleMobileMenu"
          class="block text-white hover:text-eths-orange hover:bg-eths-navy/50 px-3 py-2 rounded-md transition-all duration-300"
          active-class="text-eths-orange bg-eths-navy/50"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          @click="toggleMobileMenu"
          class="block text-white hover:text-eths-orange hover:bg-eths-navy/50 px-3 py-2 rounded-md transition-all duration-300"
          active-class="text-eths-orange bg-eths-navy/50"
        >
          Projects
        </router-link>
        <router-link
          to="/about"
          @click="toggleMobileMenu"
          class="block text-white hover:text-eths-orange hover:bg-eths-navy/50 px-3 py-2 rounded-md transition-all duration-300"
          active-class="text-eths-orange bg-eths-navy/50"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          @click="toggleMobileMenu"
          class="block text-white hover:text-eths-orange hover:bg-eths-navy/50 px-3 py-2 rounded-md transition-all duration-300"
          active-class="text-eths-orange bg-eths-navy/50"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>
