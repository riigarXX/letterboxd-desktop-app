<script setup lang="ts">
import { Card, Film, SearchFilm } from "@componentsUI/index";
import { onMounted, ref } from 'vue';
import { FilmInterface } from '@types';
import { api, movieApi } from '@apis/index'

const input = ref<String>('')
const searchMode = ref<Boolean>(false)
const pendingFilms = ref<FilmInterface[]>()
const films = ref<FilmInterface[]>()
const error = ref({
	text: "",
	visible: false,
})


const search = async () => {
	const inputValue = input.value.trim()
	if (!inputValue) {
		error.value = {
			visible: true,
			text: "Necesitas escribir tu pelicula antes de buscar",
		};
		searchMode.value = false;
	} else {
		error.value = {
			visible: false,
			text: "",
		};
		searchMode.value = true;
		films.value = await movieApi.searchFilm(input.value);
	}
};

const selectPendingFilm = (params: FilmInterface) => {
	console.log(params)
}

const loadPendingFilms = async () => {

	await api.get(`/film/filmsNoViewed`).then((response) => {
		pendingFilms.value = response.data.films
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
		<SearchFilm v-model:inputValue="input" v-model:filmValue="films" @updateFilmSelection="selectPendingFilm"
			v-model:searchMode="searchMode" @search="search" :error="error" />
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll h-[90%] mt-2">
			<Film v-for="film in pendingFilms" :key="film.iire" :film="film" />
		</div>
	</Card>
</template>
