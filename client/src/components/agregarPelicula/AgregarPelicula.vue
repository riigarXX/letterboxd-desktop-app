<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { AxiosResponse } from "axios";
import { Card, Select, Button, Input, Film, Container } from '@componentsUI/index'
import { api, movieApi } from '@apis/index'
import FilmInterface from "../../../../server/interfaces/FilmInterface";

const route = useRoute();
const searchMode = ref(false);
const inputValue = ref("");
const selectedFilms = ref<Array<FilmInterface>>([]);
const films = ref<Array<FilmInterface>>([]);

const error = ref({
	text: "",
	visible: false,
});
const saveFilms = () => {
	console.log(films);
	api
		.post("/film/films", { day: route.params.day, films: selectedFilms.value })
		.then(({ data }: AxiosResponse) => {
			console.log(data);
		});
};

const search = async () => {
	if (inputValue.value.trim() === "") {
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
		films.value = await movieApi.searchFilm(inputValue.value);
	}
};
const deleteFilm = (filmId: number) => {
	console.log(selectedFilms.value, filmId);
	selectedFilms.value = selectedFilms.value.filter(
		(film) => film.id !== filmId,
	);
	console.log(selectedFilms.value);
};
const updateFilmSelection = (selectedFilm: FilmInterface) => {
	if (!selectedFilms.value.map((film) => film.id).includes(selectedFilm.id)) {
		selectedFilms.value.push(selectedFilm);
	}
};
</script>
<template>
	<Container>
		<Card :title="'Agregar pelicula'">
			<div class="grid grid-cols-12 gap-4">
				<Input v-model="inputValue" class="col-span-12 lg:col-span-10" type="text"
					placeholder="Ingresa el nombre de tu pelicula" />
				<Button @click="search" class="col-span-12 lg:col-span-2" />
				<span class="col-span-12 text-center" v-if="error.visible">
					{{ error.text }}
				</span>
				<Select :items="films" @updateFilmSelection="updateFilmSelection" class="col-span-12"
					:search-mode="searchMode" />
			</div>
			<div class="grid grid-cols-12 gap-4 mt-2">
				<div class="col-span-12 h-[250px] overflow-y-scroll text-center md:h-[500px]">
					<div class="grid grid-cols-12 gap-4">
						<Film class="col-span-6" canDelete v-for="film in selectedFilms" :key="film.id" :film="film"
							@update:delete-film="deleteFilm" />
					</div>
				</div>
			</div>
			<div class="col-span-12 mt-2 text-center">
				<button @click="saveFilms"
					class="px-4 py-2 rounded-sm bg-ligthModeColors-background text-ligthModeColors-red hover:bg-ligthModeColors-red hover:text-ligthModeColors-background dark:bg-darkModeColors-background dark:text-darkModeColors-orange hover:dark:bg-darkModeColors-orange hover:dark:text-darkModeColors-background">
					Guardar peliculas
				</button>
			</div>
		</Card>
	</Container>
</template>
