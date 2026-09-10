<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "guest@landanfagan.com:~",
  },
});

const body = ref(null);

function scrollToBottom() {
  body.value?.scrollTo({ top: body.value.scrollHeight });
}

defineExpose({ scrollToBottom });
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg border border-terminal-black bg-bg-dark shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
  >
    <div
      class="flex shrink-0 items-center justify-center border-b border-terminal-black bg-bg px-4 py-1.5"
    >
      <span class="truncate text-sm text-fg-dark select-none">{{ title }}</span>
    </div>

    <div ref="body" class="min-h-0 flex-1 overflow-y-auto p-4 text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>
