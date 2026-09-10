<script setup>
defineProps({
  user: {
    type: String,
    default: "guest",
  },
  host: {
    type: String,
    default: "landanfagan.com",
  },
  path: {
    type: String,
    default: "~",
  },
});
</script>

<template>
  <span class="select-none">
    <span class="text-comment">{{ user }}</span
    ><span class="text-fg-dark">@</span><span class="text-green">{{ host }}</span
    ><span class="text-fg-dark">:</span><span class="text-magenta">{{ path }}</span
    ><span class="text-fg-dark">$</span>
  </span>
</template>
