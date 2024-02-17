<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import api from "../../api/axiosInstance";
import { Container, Card, Film } from "@componentsUI/index";
import { FilmInterface } from "@types";
import moment from "moment";

const router = useRoute();

let films = ref<Array<FilmInterface>>();

onMounted(() => {
  getFilms();
});

const getFilms = async () => {
  const data = await api.get(`film/films/${router.params.ID}`,
  );
  films.value = data.data.films;
};
</script>

<template>
  <Container>
    <Card :title="`Peliculas vistas ${moment(router.params.ID).format(
      'YYYY-MM-DD',
    )}`">
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll h-[90%]">
        <Film v-for="film in films" :key="film.id" :film="film" />
      </div>
    </Card>
  </Container>
</template>
