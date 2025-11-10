<script setup>
import Hero from '../components/Hero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { Github } from 'lucide-vue-next'
import { ref } from 'vue'

const currentProject = ref({
  name: 'Elective Decision Tree',
  description: 'Interactive tool to help ETHS students choose their electives',
  techStack: ['Vue', 'JavaScript'],
  githubUrl: 'https://github.com/codeths/elective-decision-tree',
  badge: 'In Development'
})

const projects = ref([
  {
    name: 'PE Scheduling Tool',
    description: 'Tool for managing PE class schedules at ETHS',
    techStack: ['Vue', 'Firebase'],
    githubUrl: 'https://github.com/codeths/pe'
  },
  {
    name: 'Grade Calculator',
    description: 'Calculate and track your grades for ETHS courses',
    techStack: ['JavaScript', 'Vue'],
    githubUrl: 'https://github.com/codeths/grade-calculator'
  },
  {
    name: 'EditorETHS',
    description: 'Text editor built for ETHS students',
    techStack: ['Vue', 'JavaScript'],
    githubUrl: 'https://github.com/codeths/EditorETHS'
  },
  {
    name: 'Kitcoin',
    description: 'ETHS school currency and rewards system',
    techStack: ['Vue', 'Firebase', 'Python'],
    githubUrl: 'https://github.com/codeths/kitcoin'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero
      title="Our Projects"
      subtitle="Building tools and applications for ETHS students"
      :gradient="false"
    />

    <!-- Projects Section -->
    <section class="py-16 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-4">What We're Building</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            CodeETHS creates practical tools and applications designed specifically for ETHS students.
            Our projects help with course planning, scheduling, grade tracking, and more.
          </p>
        </div>

        <!-- Current Project Featured Section -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-eths-navy mb-6 text-center">Current Project</h3>
          <div class="max-w-4xl mx-auto">
            <ProjectCard
              :name="currentProject.name"
              :description="currentProject.description"
              :tech-stack="currentProject.techStack"
              :github-url="currentProject.githubUrl"
              :featured="true"
              :badge="currentProject.badge"
            />
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold text-eths-navy mb-6 text-center">Our Projects</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="project in projects"
              :key="project.name"
              :name="project.name"
              :description="project.description"
              :tech-stack="project.techStack"
              :github-url="project.githubUrl"
            />
          </div>
        </div>

        <!-- View All Projects Button -->
        <div class="text-center mb-12">
          <a
            href="https://github.com/codeths"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-3 bg-eths-navy text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Github :size="24" />
            <span class="text-lg">View All Projects on GitHub</span>
          </a>
        </div>

        <!-- Call to Action -->
        <div class="mt-16 text-center">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 class="text-2xl md:text-3xl font-bold text-eths-navy mb-4">
              Want to contribute?
            </h3>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              All our projects are open-source and welcome contributions from club members.
              Join us to start building something amazing!
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <router-link
                to="/contact"
                class="bg-eths-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                Get in Touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
