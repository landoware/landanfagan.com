<script setup>
import { computed } from "vue";
import { commands } from "@/commands";

defineEmits(["run"]);

const listed = computed(() => commands.filter((command) => !command.hidden));
</script>

<template>
  <div>
    <p v-for="command in listed" :key="command.name">
      <button
        type="button"
        class="group cursor-pointer hover:underline focus-visible:underline focus-visible:outline-none"
        @click="$emit('run', command.name)"
      >
        <span :class="command.color">{{ command.icon }}</span> {{ command.name
        }}<span
          v-if="command.url"
          class="invisible inline-block group-hover:visible group-focus-visible:visible"
        >
          &#xf465;</span
        >
      </button>
    </p>
  </div>
</template>
