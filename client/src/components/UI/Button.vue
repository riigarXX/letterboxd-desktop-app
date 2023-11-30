<script setup lang="ts">

defineProps({
  text: {
    type: String,
    default: "Enviar",
  },
});
</script>

<template>
  <button
    class="rounded-sm bg-ligthModeColors-background p-2 text-ligthModeColors-red dark:bg-darkModeColors-background dark:text-darkModeColors-orange"
  >
    {{ text }}
  </button>
</template>
<style lang=""></style>
