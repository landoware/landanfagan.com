<script setup>
import { computed, onMounted, ref } from "vue";
import PromptLabel from "@/components/PromptLabel.vue";

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

const model = defineModel({ type: String, default: "" });
const emit = defineEmits(["submit"]);

const input = ref(null);
const cursor = ref(0);
const focused = ref(false);

const textBefore = computed(() => model.value.slice(0, cursor.value));
const charAtCursor = computed(() => model.value.charAt(cursor.value) || " ");
const textAfter = computed(() => model.value.slice(cursor.value + 1));

function focus() {
  input.value?.focus();
}

function syncCursor() {
  cursor.value = input.value?.selectionStart ?? model.value.length;
}

function onSubmit() {
  const command = model.value.trim();
  emit("submit", command);
  model.value = "";
  cursor.value = 0;
}

onMounted(focus);

defineExpose({ focus });
</script>

<template>
  <div class="relative flex cursor-text items-center gap-2" @click="focus">
    <PromptLabel clas="shrink-0" :user="user" :host="host" :path="path" />

    <span class="relative min-w-0 flex-1 whitespace-pre">
      <span aria-hidden="true"
        ><span>{{ textBefore }}</span
        ><span
          class="text-bg"
          :class="focused ? 'animate-blink bg-fg' : 'outline -outline-offset-1 outline-fg/60'"
          >{{ charAtCursor }}</span
        ><span>{{ textAfter }}</span>
        <span class="text-comment" :hidden="textBefore.length">
          type a command or select with the mouse</span
        >
      </span>

      <input
        ref="input"
        v-model="model"
        type="text"
        class="absolute inset-0 w-full opacity-0"
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        aria-label="shell input"
        @input="syncCursor"
        @keyup="syncCursor"
        @click="syncCursor"
        @select="syncCursor"
        @focus="((focused = true), syncCursor())"
        @blur="focused = false"
        @keydown.enter="onSubmit"
      />
    </span>
  </div>
</template>
