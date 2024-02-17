<script lang="ts" setup>
import { ref, onMounted, Ref } from "vue";
import api from "../../api/axiosInstance";
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import { Card, Calendar } from "../UI"

onMounted(() => {
  loadFilms();
});

const arrayData: Ref<Array<FilmInterface>> = ref([]);

const loadFilms = () => {
  api.get("/film/films").then((res) => {
    arrayData.value = res.data.films;
  });
};
</script>
<template>
  <Card :title="'Calendario de peliculas'">
    <Calendar :films="arrayData" />
  </Card>
</template>
