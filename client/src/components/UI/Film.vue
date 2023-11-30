<script setup lang="ts">
import FilmInterface from "../../../../server/interfaces/FilmInterface";
import { Delete } from "@element-plus/icons-vue";
const props = defineProps({
  film: {
    type: Object as () => FilmInterface,
    default: Object as () => FilmInterface,
  },
});
const emits = defineEmits(["update:deleteFilm"]);

const deleteOption = (filmId: number) => {
  emits("update:deleteFilm", filmId);
};
</script>

<template>
  <div
    class="relative col-span-6 shadow-lg sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3"
  >
    <div
      class="absolute inset-x-0 w-full rounded-t-md bg-ligthModeColors-background p-4 dark:bg-darkModeColors-background"
    >
      <p>
        {{ film.name }}
      </p>
    </div>
    <div
      class="absolute bottom-3 left-3 rounded-md bg-ligthModeColors-card p-2 dark:bg-darkModeColors-card"
    >
      <p>
        {{ film.score }}
      </p>
    </div>
    <div
      @click="deleteOption(film.id)"
      class="absolute cursor-pointer rounded-md bg-ligthModeColors-card p-2 dark:bg-darkModeColors-card"
    >
      <el-icon>
        <Delete />
      </el-icon>
    </div>
    <div
      class="absolute bottom-3 right-3 rounded-md bg-ligthModeColors-card p-2 dark:bg-darkModeColors-card"
    >
      <p>
        {{ film.director }}
      </p>
    </div>

    <img
      class="h-[250px] w-full rounded-md bg-cover bg-center bg-no-repeat md:h-[500px]"
      :src="film.image"
    />
  </div>
</template>
