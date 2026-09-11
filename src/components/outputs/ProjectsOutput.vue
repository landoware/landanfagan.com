<script setup>
import { projects } from "@/projects";
</script>

<template>
  <div class="mb-2">
    <div v-for="project in projects" :key="project.name" class="mb-3 last:mb-0">
      <p>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-yellow underline hover:text-blue"
        >
          {{ project.name }}
          <span class="inline-block ml-0.5">{{ "\uf465" }}</span>
        </a>
        <span class="ml-2 text-comment">
          {{ project.tech.join(", ") }}
          <template v-if="project.status"> -- {{ project.status }}</template>
        </span>
      </p>
      <ul class="ml-4">
        <li v-for="(line, index) in project.description" :key="index" class="text-fg-dark">
          <span class="text-comment mr-2">-</span>{{ line }}
        </li>
      </ul>
    </div>
  </div>
</template>
