<script setup>
import { computed } from "vue";
import { commands } from "@/commands";
import CommandButton from "../CommandButton.vue";

const emit = defineEmits(["run"]);

const listed = computed(() => commands.filter((command) => !command.hidden));
</script>

<template>
  <div>
    <p v-for="command in listed" :key="command.name">
      <CommandButton :commandName="command.name" @run="emit('run', $event)" />
    </p>
  </div>
</template>
