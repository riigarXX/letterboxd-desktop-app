<script setup lang="ts">
import { ref } from "vue";
import FilmInterface from "../../../../server/interfaces/FilmInterface";

const props = defineProps({
	searchMode: {
		type: Boolean,
		default: true,
	},
	items: {
		type: Array as () => FilmInterface[],
		default: [],
	},
});

const emits = defineEmits(["updateFilmSelection"]);

const isMenuOpen = ref(false);
const selectedOption = ref("");

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const selectOption = (option: FilmInterface) => {
	emits("updateFilmSelection", option);
	isMenuOpen.value = false;
};
</script>
<template>
	<div class="relative inline-block w-full col-span-12">
		<button @click="toggleMenu" type="button"
			class="inline-flex justify-between w-full p-3 text-sm font-medium text-left rounded-sm outline-none bg-ligthModeColors-background shadow-ligthModeColors-red dark:bg-darkModeColors-background dark:shadow-darkModeColors-orange">
			{{ selectedOption || "Seleccionar opción" }}
			<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd"
					d="M10.293 13.293a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1 0 1.414z"
					clip-rule="evenodd" />
			</svg>
		</button>
		<div v-if="isMenuOpen"
			class="absolute z-10 w-full mt-4 overflow-y-scroll rounded-sm shadow-lg max-h-64 bg-ligthModeColors-background dark:bg-darkModeColors-background">
			<div class="py-1 grid grid-cols-12 gap-4 w-full h-full" v-if="props.items.length > 0">
				<div v-for="film in props.items" :key="film.id" @click="selectOption(film)"
					class=" col-span-12 px-4 py-2 text-sm cursor-pointer hover:bg-ligthModeColors-card hover:dark:bg-darkModeColors-card">
					<div class="grid grid-cols-12 gap-4">
						<!-- Columna de la imagen -->
						<div class="col-span-2">
							<div class="w-30 h-30">
								<img :src="film.image" alt="Imagen de la película"
									class="rounded-lg w-full h-full object-cover" />
							</div>
						</div>
						<!-- Columna del contenido -->
						<div class="col-span-10">
							<div class="flex flex-col h-full justify-between">
								<!-- Fila 1 -->
								<div class="flex ">
									<div
										class="rounded-full py-1 px-3 text-sm font-semibold uppercase bg-darkModeColors-card">
										{{ film.name }}
									</div>
								</div>
								<!-- Fila 2 -->
								<div class="flex justify-between">
									<div
										class="rounded-full py-1 px-3 text-sm font-semibold uppercase bg-darkModeColors-card">
										{{ film.director }}
									</div>
									<div
										class="rounded-full py-1 px-3 text-sm font-semibold uppercase bg-darkModeColors-card">
										{{ film.score }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div v-else class="p-4 text-center">Ningun resultado</div>
		</div>
	</div>
</template>
