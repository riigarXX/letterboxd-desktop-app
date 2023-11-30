<template>
  <el-calendar class="bg-ligthModeColors-card dark:bg-darkModeColors-card">
    <template #date-cell="{ data }">
      <div>{{ data.day.split("-")[1] }} - {{ data.day.split("-")[2] }}</div>
      <div class="m-2 flex items-center justify-center gap-3">
        <div v-if="filmsWatched(data.day)?.length > 0">
          <button
            class="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-ligthModeColors-red text-ligthModeColors-background dark:bg-darkModeColors-orange dark:text-darkModeColors-background"
            @click="loadFilm(filmsWatched(data.day))"
          >
            <el-icon>
              <Film />
            </el-icon>
          </button>
        </div>
        <div>
          <button
            class="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-ligthModeColors-red text-ligthModeColors-background dark:bg-darkModeColors-orange dark:text-darkModeColors-background"
            @click="addFilm(data.day)"
          >
            <el-icon>
              <Plus />
            </el-icon>
          </button>
        </div>
      </div>
    </template>
  </el-calendar>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import moment from "moment";
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import { Plus, Film } from "@element-plus/icons-vue";
const props = defineProps({
  films: {
    type: Array<FilmInterface>,
    defult: [],
  },
});

const filmsWatched = (date: Date): Array<FilmInterface> | undefined => {
  return props.films?.filter(
    (item: FilmInterface) =>
      moment(date).format("YYYY-MM-DD") ===
      moment(item.dateInsert).format("YYYY-MM-DD"),
  );
};
const loadFilm = (arrayFilms: Array<FilmInterface>) => {
  ipcRenderer.invoke(
    `openWindow`,
    `/loadFilm/${moment(arrayFilms[0].dateInsert).format("YYYY-MM-DD")}`,
  );
};
const addFilm = (date: Date) => {
  console.log(date);
  ipcRenderer.invoke(`openWindow`, `/addFilm/${date}`);
};
</script>
