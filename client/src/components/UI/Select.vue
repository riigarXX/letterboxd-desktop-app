<script setup lang="ts">
import { ref } from "vue";
import FilmInterface from "../../../../server/interfaces/FilmInterface";

const props = defineProps({
  searchMode: {
    type: Boolean,
    default: true,
  },
  items: {
    type: Array as () => FilmInterface[],
    default: [],
  },
});

const emits = defineEmits(["updateFilmSelection"]);

const isMenuOpen = ref(false);
const selectedOption = ref("");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const selectOption = (option: FilmInterface) => {
  emits("updateFilmSelection", option);
  isMenuOpen.value = false;
};
</script>
<template>
  <div class="relative col-span-12 inline-block w-full">
    <button
      @click="toggleMenu"
      type="button"
      class="inline-flex w-full justify-between rounded-sm bg-ligthModeColors-background p-3 text-left text-sm font-medium shadow-ligthModeColors-red outline-none dark:bg-darkModeColors-background dark:shadow-darkModeColors-orange"
    >
      {{ selectedOption || "Seleccionar opción" }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="-mr-1 ml-2 h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 13.293a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1 0 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      v-if="isMenuOpen"
      class="absolute z-10 mt-4 max-h-64 w-full overflow-y-scroll rounded-sm bg-ligthModeColors-background shadow-lg dark:bg-darkModeColors-background"
    >
      <div class="py-1" v-if="props.items.length > 0">
        <a
          v-for="film in props.items"
          :key="film.id"
          @click="selectOption(film)"
          class="block cursor-pointer px-4 py-2 text-sm hover:bg-ligthModeColors-card hover:dark:bg-darkModeColors-card"
        >
          {{ film.name }} - {{ film.score }}
        </a>
      </div>
      <div v-else class="p-4 text-center">Ningun resultado</div>
    </div>
  </div>
</template>
