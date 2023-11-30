<script lang="ts" setup>
import { ref, onMounted, Ref } from "vue";
import { AxiosResponse } from "axios";
import api from "../../api/axiosInstance";
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import {Card,Calendar} from "../UI/UI"

onMounted(() => {
  loadFilms();
});

const arrayData: Ref<Array<FilmInterface>> = ref([]);

const loadFilms = () => {
  api("/film/getFilms").then((res: AxiosResponse<Array<FilmInterface>>) => {
    arrayData.value = res.data;
  });
};
</script>
<template>
  <Card :title="'Calendario de peliculas'">
    <Calendar :films="arrayData" />
  </Card>
</template>
