<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import api from "../../api/axiosInstance";
import Card from "../UI/Card.vue";
import Container from "../UI/Container.vue";
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import moment from "moment";

const router = useRoute();

let film = ref<Array<FilmInterface>>();

onMounted(() => {
  getFilms();
});

const getFilms = async () => {
  const data = await api.post(
    "http://localhost:3000/film/loadFilmByDay",
    router.params.ID,
  );
  film.value = data.data;
};
</script>

<template>
  <Container>
    <Card
      :title="`Peliculas vistas ${moment(router.params.ID).format(
        'YYYY-MM-DD',
      )}`"
    >
      {{ film }}
    </Card>
  </Container>
</template>
