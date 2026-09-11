<script setup>
import { findCommand } from "@/commands";

const props = defineProps({
  commandName: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["run"]);
const command = findCommand(props.commandName);
</script>

<template>
  <button
    v-if="command"
    type="button"
    class="group cursor-pointer focus-visible:underline focus-visible:outline-none hover:text-blue"
    @click="emit('run', command.name)"
  >
    <span :class="command.color">{{ command.icon }}</span>
    <span class="ml-1 underline">{{ command.name }} </span>
    <span v-if="command.url" class="inline-block ml-0.5">{{ "\uf465" }} </span>
  </button>
</template>
