<template>
  <div>
    <el-calendar class="bg-ligthModeColors-card dark:bg-darkModeColors-card">
      <template #date-cell="{ data }">
        <el-row>
          {{ data.day.split("-")[1] }} - {{ data.day.split("-")[2] }}
        </el-row>
        <div>
          <el-row>
            <el-col
              v-for="(item, index) in filmsWatched(data.day)"
              :key="index"
            >
              <el-button @click="loadFilm(item._id)" size="small"
                >Ver película</el-button
              >
            </el-col>
            <el-col class="addTraining">
              <el-button @click="addFilm(data.day)" size="small"
                >Agregar película</el-button
              >
            </el-col>
          </el-row>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { AxiosResponse } from "axios";
import { ipcRenderer } from "electron";
import api from "../../api/axiosInstance";
import moment from "moment";
import FilmInterface from "../../../../server/interfaces/FilmInterface";

onMounted(() => {
  loadFilms();
});

const arrayData: Ref<Array<FilmInterface>> = ref([]);

const loadFilms = () => {
  api("/film/getFilms").then((res: AxiosResponse<Array<FilmInterface>>) => {
    arrayData.value = res.data;
  });
};

const filmsWatched = (date: Date) => {
  return arrayData.value.filter((item: FilmInterface) => {
    return (
      moment(date).format("YYYY-MM-DD") ===
      moment(item.fechaInsercion).format("YYYY-MM-DD")
    );
  });
};
const loadFilm = (idFilm: string) => {
  ipcRenderer.invoke(`openWindow`, `loadFilm/${idFilm}`);
};
const hasFilms = (date: Date) => {
  return filmsWatched(date).length > 0;
};
const addFilm = (date: Date) => {
  ipcRenderer.invoke(`openWindow`, `addFilm/${date}`);
};
</script>
