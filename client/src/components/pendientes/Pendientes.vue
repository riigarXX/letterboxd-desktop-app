<script setup lang="ts">
import { Card, Film } from "@componentsUI/index";
// import {} from "@types"
import { onMounted, ref } from 'vue';
import { FilmInterface } from '@types';
import { api } from "@/api";

const films = ref<FilmInterface[]>()

const loadPendingFilms = async () => {
	//logica de peliculas no vistas (isWatched = false)
	await api.get(`/film/filmsNoViewed`).then((response) => {
		films.value = response.data.films
	}).catch(e => {
		console.log(e);
	})
}
onMounted(() => {
	loadPendingFilms()
})
</script>
<template>
	<Card :title="'Pendientes'">
		<!-- Add search -->
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll h-[90%]">
			<Film v-for="film in films" :key="film.iire" :film="film" />
		</div>
	</Card>
</template>
