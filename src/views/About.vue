<script setup>
import Hero from '../components/Hero.vue'
import { BookOpen, Code, Users, Target, Calendar, Github } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero
      title="About CodeETHS"
      subtitle="Fostering a community of student developers at Evanston Township High School"
      :gradient="false"
    />

    <!-- What is CodeETHS Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-6 text-center">
            What is CodeETHS?
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            CodeETHS is a student-led coding club at Evanston Township High School dedicated to empowering
            students with the skills and knowledge needed to succeed in software development. We believe
            that coding is for everyone, and our mission is to create an inclusive, supportive environment
            where students of all skill levels can learn, create, and grow together.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Founded by students who are passionate about technology, CodeETHS brings together aspiring
            developers to work on real-world projects, learn industry-standard tools, and build meaningful
            connections within the ETHS community.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <Target :size="64" class="text-eths-orange mx-auto mb-6" />
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-6">
            Our Mission
          </h2>
          <p class="text-xl text-gray-700 leading-relaxed">
            To mentor underclassmen, build impactful projects, and create a thriving community of
            student developers who support and learn from each other.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-12 text-center">
          What We Do
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Teaching -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-eths-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen :size="40" class="text-eths-orange" />
            </div>
            <h3 class="text-2xl font-bold text-eths-navy mb-4">Teaching</h3>
            <p class="text-gray-700 leading-relaxed">
              We provide hands-on workshops and tutorials covering web development, Python, Firebase,
              Git, and other essential technologies.
            </p>
          </div>

          <!-- Building -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-eths-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code :size="40" class="text-eths-blue" />
            </div>
            <h3 class="text-2xl font-bold text-eths-navy mb-4">Building</h3>
            <p class="text-gray-700 leading-relaxed">
              Members collaborate on real projects—from websites to tools—that solve actual problems
              and make an impact in our school.
            </p>
          </div>

          <!-- Collaborating -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-eths-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users :size="40" class="text-eths-orange" />
            </div>
            <h3 class="text-2xl font-bold text-eths-navy mb-4">Collaborating</h3>
            <p class="text-gray-700 leading-relaxed">
              Upperclassmen mentor underclassmen, fostering a supportive environment where everyone
              learns from each other's experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-6 text-center">
            Who We Are
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            CodeETHS is a student-led organization at Evanston Township High School. Our members come
            from all grades and backgrounds, united by a shared passion for coding and technology.
            Whether you're just starting your coding journey or you're an experienced developer,
            you'll find a welcoming community here.
          </p>
        </div>
      </div>
    </section>

    <!-- Meeting Schedule Section -->
    <section class="py-16 bg-gradient-to-r from-eths-blue to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calendar :size="64" class="text-white mx-auto mb-6" />
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Meetings
        </h2>
        <p class="text-xl text-white/90 mb-2">
          Every Wednesday during <span class="font-bold">both A and B lunch</span>
        </p>
        <p class="text-lg text-white/80 mb-8">
          All students are welcome—no experience required!
        </p>
      </div>
    </section>

    <!-- GitHub Organization Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Github :size="64" class="text-eths-navy mx-auto mb-6" />
        <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-4">
          Explore Our Work
        </h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          All our projects are open-source and available on GitHub. Check out what we're building
          and feel free to contribute!
        </p>
        <a
          href="https://github.com/codeths"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-2 bg-eths-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
        >
          <Github :size="24" />
          <span class="text-lg">Visit Our GitHub Organization</span>
        </a>
      </div>
    </section>
  </div>
</template>
