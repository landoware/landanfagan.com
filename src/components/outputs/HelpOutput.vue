<script setup lang="ts">
import CommandButton from "../CommandButton.vue";
const emit = defineEmits(["run"]);
</script>

<template>
  <div class="mb-2">
    <p class="text-fg-dark">
      Type or click a command listed by
      <CommandButton commandName="commands" @run="emit('run', $event)" /> to run it.
    </p>
  </div>
</template>
