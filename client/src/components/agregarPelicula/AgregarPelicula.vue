<script setup lang="ts">
import { AxiosResponse } from "axios";
import { onMounted, ref, Ref } from "vue";
import Container from "../UI/Container.vue";
import Card from "../UI/Card.vue";
import Select from "../UI/Select.vue";
import Button from "../UI/Button.vue";
import Input from "../UI/Input.vue";
import Film from "../UI/Film.vue";
import movieApi from "../../api/movieApi";
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import { useRoute } from "vue-router";
import api from "../../api/axiosInstance";

const route = useRoute();
const saveFilms = () => {
  api
    .post("/film/saveFilms", { day: route.params.day, films })
    .then(({ data }: AxiosResponse) => {
      console.log(data);
    });
};
const searchMode = ref(false);
const inputValue = ref("");
const selectedFilms = ref<Array<FilmInterface>>([]);
const films = ref<Array<FilmInterface>>([]);
const error = ref({
  text: "",
  visible: false,
});

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
        <Input
          v-model="inputValue"
          class="col-span-12 lg:col-span-10"
          type="text"
          placeholder="Ingresa el nombre de tu pelicula"
        />
        <Button @click="search" class="col-span-12 lg:col-span-2" />
        <span class="col-span-12 text-center" v-if="error.visible">
          {{ error.text }}
        </span>

        <Select
          :items="films"
          @updateFilmSelection="updateFilmSelection"
          class="col-span-12"
          :search-mode="searchMode"
        />
        <div
          v-if="films.length > 0"
          class="col-span-12 h-[250px] overflow-y-scroll text-center md:h-[500px]"
        >
          <div class="grid grid-cols-12 gap-4">
            <Film
              v-for="film in selectedFilms"
              :key="film.id"
              :film="film"
              @update:delete-film="deleteFilm"
            />
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-5 text-center">
        <button
          @click="saveFilms"
          class="rounded-sm bg-ligthModeColors-background px-4 py-2 text-ligthModeColors-red hover:bg-ligthModeColors-red hover:text-ligthModeColors-background dark:bg-darkModeColors-background dark:text-darkModeColors-orange hover:dark:bg-darkModeColors-orange hover:dark:text-darkModeColors-background"
        >
          Guardar peliculas
        </button>
      </div>
    </Card>
  </Container>
</template>
