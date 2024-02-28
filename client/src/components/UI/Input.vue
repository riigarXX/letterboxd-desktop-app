<script setup lang="ts">
import { ref } from "vue";
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
const updateInputValue = (event: any) => {
	inputValue.value = event.target.value;
	emits("update:modelValue", inputValue.value);
};
</script>
<template>
	<input :value="inputValue" @input="updateInputValue" :type="props.type" :placeholder="props.placeholder"
		class="p-2 text-center rounded-sm outline-none bg-ligthModeColors-background placeholder:text-ligthModeColors-red dark:bg-darkModeColors-background placeholder:dark:text-darkModeColors-orange" />
</template>
