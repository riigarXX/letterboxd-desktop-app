<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>
<template>
	<div
		class="h-[85%] w-[85%] overflow-hidden rounded-sm bg-ligthModeColors-card p-5 shadow-lg dark:bg-darkModeColors-card">
		<div class="grid-flow-col gap-2">
			<h1 class="text-3xl">{{ title }}</h1>
		</div>
		<div>
			<hr class="my-4" />
		</div>
		<slot> </slot>
	</div>
</template>
