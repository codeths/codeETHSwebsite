<script setup>
import Hero from '../components/Hero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { ref } from 'vue'

const projects = ref([
  {
    name: 'CodeETHS Website',
    description: 'Our official club website built with Vue 3, showcasing who we are and what we do.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vue Router'],
    githubUrl: 'https://github.com/Pogo-Bash/codeeths-website'
  },
  {
    name: 'Student Portal',
    description: 'A comprehensive student resource portal with assignment tracking and study tools.',
    techStack: ['React', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/Pogo-Bash'
  },
  {
    name: 'ETHS Event Manager',
    description: 'Event management system for school activities with real-time updates and notifications.',
    techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/Pogo-Bash'
  },
  {
    name: 'Code Challenge Platform',
    description: 'Interactive coding challenges for club members to practice algorithms and problem-solving.',
    techStack: ['Python', 'Flask', 'PostgreSQL'],
    githubUrl: 'https://github.com/Pogo-Bash'
  },
  {
    name: 'Club Resource Library',
    description: 'Curated collection of tutorials, documentation, and learning resources for members.',
    techStack: ['Next.js', 'MDX', 'Vercel'],
    githubUrl: 'https://github.com/Pogo-Bash'
  },
  {
    name: 'Attendance Tracker',
    description: 'Simple and efficient attendance tracking system for club meetings and events.',
    techStack: ['Vue 3', 'Firebase', 'PWA'],
    githubUrl: 'https://github.com/Pogo-Bash'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero
      title="Our Projects"
      subtitle="Explore the innovative projects built by CodeETHS members"
      :gradient="false"
    />

    <!-- Projects Section -->
    <section class="py-16 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-eths-navy mb-4">What We're Building</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            From web applications to automation tools, our members collaborate on real-world projects
            that solve problems and make an impact in our school community.
          </p>
        </div>

        <!-- Projects Grid -->
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
              <a
                href="https://github.com/Pogo-Bash"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-eths-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                View on GitHub
              </a>
              <router-link
                to="/contact"
                class="bg-eths-navy text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
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
