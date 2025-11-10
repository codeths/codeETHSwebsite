<script setup>
import Hero from '../components/Hero.vue'
import InfoCard from '../components/InfoCard.vue'
import ClassroomButton from '../components/ClassroomButton.vue'
import { BookOpen, Wrench, Users, Github, Calendar } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero
      title="CodeETHS"
      subtitle="Empowering Student Developers at ETHS"
    />

    <!-- About Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-4">About CodeETHS</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            We're a student-led coding club dedicated to mentoring underclassmen and building real-world projects.
            Whether you're a beginner or experienced developer, CodeETHS is your community for learning,
            creating, and growing together.
          </p>
        </div>

        <!-- Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            title="Learn"
            description="Master web development, Python, Firebase, and more with hands-on guidance from experienced peers."
            :icon="BookOpen"
          />
          <InfoCard
            title="Build"
            description="Create real websites, tools, and applications that make an impact in our school community."
            :icon="Wrench"
          />
          <InfoCard
            title="Mentor"
            description="Upperclassmen guide underclassmen through their coding journey in a supportive environment."
            :icon="Users"
          />
        </div>
      </div>
    </section>

    <!-- Meeting Info Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-eths-blue to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <Calendar :size="48" class="text-white mx-auto mb-4" />
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Meetings</h2>
          <p class="text-xl text-white/90 mb-2">
            Every Wednesday during <span class="font-bold">both A and B lunch</span>
          </p>
          <p class="text-white/80">
            All skill levels welcome!
          </p>
        </div>
      </div>
    </section>

    <!-- Google Classroom Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-6">Get Started Today</h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join our Google Classroom to stay updated with meeting schedules, project announcements, and resources.
        </p>
        <ClassroomButton />
      </div>
    </section>

    <!-- GitHub Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-eths-navy rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <Github :size="64" class="text-white mx-auto mb-6" />
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Code</h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our open-source projects, contribute to ongoing work, and see what the CodeETHS community is building.
          </p>
          <a
            href="https://github.com/Pogo-Bash"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 bg-white text-eths-navy font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Github :size="24" />
            <span class="text-lg">Visit Our GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-eths-orange to-orange-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Involved?</h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you're looking to learn, build, or mentor, CodeETHS has a place for you.
          Join us at our next meeting or connect with us online!
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/about"
            class="bg-white text-eths-orange font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            Learn More About Us
          </router-link>
          <router-link
            to="/projects"
            class="bg-eths-navy text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            View Our Projects
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
