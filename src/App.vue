<script setup>
import { nextTick, ref } from "vue";
import TerminalWindow from "@/components/TerminalWindow.vue";
import ShellInput from "@/components/ShellInput.vue";
import { findCommand } from "@/commands";

const terminal = ref(null);
const shell = ref(null);
const history = ref([
  { input: "commands", component: findCommand("commands").component },
  { input: "about", component: findCommand("about").component },
  { input: "help", component: findCommand("help").component },
]);

async function run(input) {
  const name = input.trim().toLowerCase();

  if (name === "clear") {
    history.value = [];
  } else {
    const command = findCommand(name);

    // Commands with a url open in a new tab. Must happen synchronously
    // within the user gesture so popup blockers allow it.
    if (command?.url) {
      window.open(command.url, "_blank", "noopener,noreferrer");
    }

    history.value.push({
      input: name,
      component: command?.component ?? null,
    });
  }

  shell.value?.focus();
  await nextTick();
  terminal.value?.scrollToBottom();
}
</script>

<template>
  <main class="flex h-full items-center justify-center p-4 sm:p-8">
    <TerminalWindow ref="terminal" class="h-full max-h-168 w-full max-w-3xl">
      <div v-for="(entry, i) in history" :key="i" class="my-2 first:mt-0">
        <p class="text-comment">{{ "\uf105" }} {{ entry.input }}</p>
        <component :is="entry.component" v-if="entry.component" @run="run" />
        <p v-else-if="entry.input" class="mb-2 text-red">
          sh: command not found: {{ entry.input }}
        </p>
      </div>

      <ShellInput ref="shell" @submit="run" />
    </TerminalWindow>
  </main>
</template>
