<script setup lang="ts">
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import { Delete } from "@element-plus/icons-vue";
defineProps({
  film: {
    type: Object as () => FilmInterface,
    default: Object as () => FilmInterface,
  },
  canDelete: {
    type:Boolean,
    default:false
  }
});
const emits = defineEmits(["update:deleteFilm"]);

const deleteOption = (filmId: number) => {
  emits("update:deleteFilm", filmId);
};
</script>

<template>
  <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4 2xl:col-span-3">

    <div class="relative shadow-lg">
      <div
        class="absolute inset-x-0 w-full p-4 rounded-t-md bg-ligthModeColors-background dark:bg-darkModeColors-background">
        <p>
          {{ film.name }}
        </p>
      </div>
      <div class="absolute p-2 rounded-md bottom-3 left-3 bg-ligthModeColors-card dark:bg-darkModeColors-card">
        <p>
          {{ film.score }}
        </p>
      </div>
      <div v-if="canDelete" @click="deleteOption(film.id)"
        class="absolute p-2 rounded-md cursor-pointer bg-ligthModeColors-card dark:bg-darkModeColors-card">
        <el-icon>
          <Delete />
        </el-icon>
      </div>
      <div v-else></div>
      <div class="absolute p-2 rounded-md bottom-3 right-3 bg-ligthModeColors-card dark:bg-darkModeColors-card">
        <p>
          {{ film.director }}
        </p>
      </div>

      <img class="h-[100%] w-full rounded-md bg-cover bg-center bg-no-repeat md:h-[500px]" :src="film.image" />
    </div>
  </div>
</template>
