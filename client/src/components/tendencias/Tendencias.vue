<script setup lang="ts">
import { ref } from 'vue'
import { Card, Film } from '@componentsUI/index'
import { movieApi } from "@apis/index";
import { onMounted } from "vue";
import FilmInterface from '../../../../server/interfaces/FilmInterface';

const films = ref<Array<FilmInterface>>()

onMounted(async () => {
  films.value = await movieApi.getTrends();
});
</script>
<template>
  <Card title="Tendencias">
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll h-[90%]">
      <Film v-for="film in films" :key="film.id" :film="film" />
    </div>
  </Card>
</template>
