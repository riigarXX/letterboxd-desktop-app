<template lang="">
    <el-container class="container">
      <el-main>
        <el-card>{{film}}</el-card>
      </el-main>
    </el-container>
</template>
<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { onMounted,ref ,Ref} from 'vue';
import { useRoute } from 'vue-router';
import Film from "../../../../server/interfaces/FilmInterface"
import api from '../../api/axiosInstance';

const route = useRoute()

onMounted(() => {
  loadFilmByDay()
})

let film = ref<Film>()
const loadFilmByDay = () => {
  api.post('/film/loadFilmByDay',{day:route.params.ID}).then(({data}:AxiosResponse<Film>) => {
    film.value = data
  })
}

</script>