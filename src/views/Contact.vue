<script setup>
import Hero from '../components/Hero.vue'
import ClassroomButton from '../components/ClassroomButton.vue'
import { Calendar, MapPin, Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero
      title="Get in Touch"
      subtitle="Join CodeETHS and become part of our developer community"
      :gradient="false"
    />

    <!-- Contact Information Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-12 text-center">
            How to Join
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Meeting Info Card -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="bg-eths-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar :size="32" class="text-eths-blue" />
              </div>
              <h3 class="text-2xl font-bold text-eths-navy mb-4">Meeting Schedule</h3>
              <p class="text-gray-700 leading-relaxed mb-2">
                <span class="font-semibold">Every Wednesday</span>
              </p>
              <p class="text-gray-700 leading-relaxed">
                During both A and B lunch periods
              </p>
            </div>

            <!-- Location Card -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="bg-eths-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin :size="32" class="text-eths-orange" />
              </div>
              <h3 class="text-2xl font-bold text-eths-navy mb-4">Meeting Location</h3>
              <p class="text-gray-700 leading-relaxed mb-2">
                <span class="font-semibold">Evanston Township High School</span>
              </p>
              <p class="text-gray-700 leading-relaxed">
                Room number will be announced in Google Classroom
              </p>
            </div>
          </div>

          <!-- What to Expect -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 class="text-2xl font-bold text-eths-navy mb-6 text-center">What to Expect</h3>
            <div class="space-y-4 text-gray-700">
              <div class="flex items-start">
                <div class="bg-eths-orange w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p class="leading-relaxed">
                  <span class="font-semibold">No experience required!</span> Whether you've never coded before
                  or you're a seasoned developer, you're welcome here.
                </p>
              </div>
              <div class="flex items-start">
                <div class="bg-eths-orange w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p class="leading-relaxed">
                  <span class="font-semibold">Hands-on learning:</span> Work on real projects and learn by doing,
                  with guidance from experienced members.
                </p>
              </div>
              <div class="flex items-start">
                <div class="bg-eths-orange w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p class="leading-relaxed">
                  <span class="font-semibold">Friendly community:</span> Meet other students who share your
                  passion for technology and coding.
                </p>
              </div>
              <div class="flex items-start">
                <div class="bg-eths-orange w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p class="leading-relaxed">
                  <span class="font-semibold">Flexible commitment:</span> Attend as many or as few meetings
                  as your schedule allows. We're here when you need us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Classroom Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-6">
          Join Our Google Classroom
        </h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay up to date with meeting schedules, project announcements, resources, and more.
          Join our Google Classroom to get started!
        </p>
        <ClassroomButton />
      </div>
    </section>

    <!-- GitHub & Email Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-12 text-center">
            Connect With Us
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- GitHub Card -->
            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
              <div class="bg-eths-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Github :size="40" class="text-eths-navy" />
              </div>
              <h3 class="text-2xl font-bold text-eths-navy mb-4">GitHub</h3>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Check out our open-source projects and contribute to the codebase.
              </p>
              <a
                href="https://github.com/codeths"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-eths-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:scale-105"
              >
                Visit GitHub
              </a>
            </div>

            <!-- Email Card -->
            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
              <div class="bg-eths-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail :size="40" class="text-eths-orange" />
              </div>
              <h3 class="text-2xl font-bold text-eths-navy mb-4">Email Us</h3>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Have questions? Reach out to us and we'll get back to you soon.
              </p>
              <a
                href="mailto:codeeths@eths.k12.il.us"
                class="inline-block bg-eths-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:scale-105"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-eths-orange to-orange-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Coding Journey?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join CodeETHS today and become part of a thriving community of student developers!
        </p>
        <router-link
          to="/"
          class="inline-block bg-white text-eths-orange font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
        >
          Back to Home
        </router-link>
      </div>
    </section>
  </div>
</template>
