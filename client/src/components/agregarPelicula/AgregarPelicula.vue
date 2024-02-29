<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { AxiosResponse } from "axios";
import { Card, Button, Film, Container, SearchFilm } from '@componentsUI/index'
import { api, movieApi } from '@apis/index'
import FilmInterface from "../../../../server/interfaces/FilmInterface";

const route = useRoute();
const searchMode = ref(false);
const input = ref<String>("");
const selectedFilms = ref<Array<FilmInterface>>([]);
const films = ref<Array<FilmInterface>>([]);

const error = ref({
	text: "",
	visible: false,
});
const saveFilms = () => {
	api.post("/film/films", { day: route.params.day, films: selectedFilms.value })
};

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
const deleteFilm = (filmId: number) => {
	selectedFilms.value = selectedFilms.value.filter(
		(film) => film.id !== filmId,
	);
};
const selectPendingFilm = (selectedFilm: FilmInterface) => {
	if (!selectedFilms.value.map((film) => film.id).includes(selectedFilm.id)) {
		selectedFilms.value.push(selectedFilm);
	}
};
</script>
<template>
	<Container>
		<Card :title="'Agregar pelicula'">
			<div class="">
				<div class="col-span">
					<SearchFilm v-model:inputValue="input" v-model:filmValue="films"
						@updateFilmSelection="selectPendingFilm" v-model:searchMode="searchMode" @search="search"
						:error="error" />
				</div>
			</div>
			<div class="grid grid-cols-12 gap-4 mt-2">
				<div class="col-span-12 h-[250px] overflow-y-scroll text-center md:h-[500px]">
					<div class="grid grid-cols-12 gap-4">
						<Film class="col-span-6" canDelete v-for="film in selectedFilms" :key="film.id" :film="film"
							@update:delete-film="deleteFilm" />
					</div>
				</div>
			</div>
			<div class="col-span mt-2 text-center">
				<div class="mt-4">
					<button @click="saveFilms"
						class="px-4 py-2 rounded-sm bg-ligthModeColors-background text-ligthModeColors-red hover:bg-ligthModeColors-red hover:text-ligthModeColors-background dark:bg-darkModeColors-background dark:text-darkModeColors-orange hover:dark:bg-darkModeColors-orange hover:dark:text-darkModeColors-background">
						Guardar peliculas
					</button>
				</div>
			</div>
		</Card>
	</Container>
</template>
