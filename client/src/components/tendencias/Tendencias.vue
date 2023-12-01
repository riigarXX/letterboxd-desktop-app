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
    <div class="overflow-y-scroll h-[100%] grid grid-cols-12 gap-4">
        <Film  v-for="film in films" :key="film.id" :film="film" />
    </div>
  </Card>
</template>
