<script setup>
defineProps({
  title: String,
  subtitle: String,
  gradient: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="relative overflow-hidden py-20 md:py-32"
    :class="gradient ? 'bg-gradient-to-br from-eths-orange via-orange-500 to-orange-600' : 'bg-eths-navy'"
  >
    <!-- Geometric Patterns -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-45"></div>
      <div class="absolute top-40 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
      <div class="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-white"></div>
      <div class="absolute bottom-32 right-1/3 w-20 h-20 border-4 border-white rotate-12"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
        {{ title }}
      </h1>
      <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
