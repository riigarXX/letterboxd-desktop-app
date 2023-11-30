<script setup lang="ts">
import { ref, watch } from "vue";
const inputValue = ref("");
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Ingresa tu ...",
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateInputValue = (event) => {
  inputValue.value = event.target.value;
  emits("update:modelValue", inputValue.value);
};
</script>
<template>
  <input
    :value="inputValue"
    @input="updateInputValue"
    :type="props.type"
    :placeholder="props.placeholder"
    class="rounded-sm bg-ligthModeColors-background p-2 text-center outline-none placeholder:text-ligthModeColors-red dark:bg-darkModeColors-background placeholder:dark:text-darkModeColors-orange"
  />
</template>
<style lang=""></style>
