<script lang="ts" setup>
import { ref, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { changeOSTheme } from "../../utils/changeOsTheme";
import {
  Setting,
  User,
  MoonNight,
  Sunny,
  CircleCloseFilled,
  Film,
  Clock,
  List,
} from "@element-plus/icons-vue";

const iconSetting = shallowRef(Setting);
const iconUser = shallowRef(User);
const iconFilm = shallowRef(Film);
const iconList = shallowRef(List);
const iconClock = shallowRef(Clock);

const iconCircleCloseFilled = shallowRef(CircleCloseFilled);
const router = useRouter();
const sideBarSections = ref({
  perfil: {
    name: "Perfil",
    icon: iconUser,
    path: "",
    childs: [
      {
        name: "Tendencias",
        icon: iconList,
        path: "trends",
      },
      {
        name: "Mis peliculas",
        icon: iconFilm,
        path: "films",
      },
      {
        name: "Mis pendientes",
        icon: iconClock,
        path: "pending",
      },
    ],
  },
  options: {
    name: "Opciones",
    icon: iconSetting,
    path: "settings",
    childs: [],
  },
  logOut: {
    name: "Cerrar sesion",
    icon: iconCircleCloseFilled,
    path: "/",
    childs: [],
  },
});
const opciones = ref({
  nigthMode: Boolean,
});

const showOptions = ref<string | null>(null);

const changeTheme = async () => {
  opciones.value.nigthMode = await changeOSTheme();
};

const toogleOptions = (sectionKey: string, path: string) => {
  if (sideBarSections.value[sectionKey].childs.length === 0) {
    // Redirige a la ruta deseada si childs está vacío
    router.push(`/${path}`);
  } else {
    showOptions.value = showOptions.value === sectionKey ? null : sectionKey;
  }
};
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <ul class="space-y-2">
      <li v-for="(section, sectionKey) in sideBarSections" :key="sectionKey">
        <div @click="toogleOptions(sectionKey, section.path)"
          class="grid w-full grid-cols-12 py-2 text-left text-gray-800 rounded-sm cursor-pointer hover:bg-ligthModeColors-red hover:text-ligthModeColors-background focus:outline-none hover:dark:bg-darkModeColors-orange hover:dark:text-darkModeColors-background">
          <div class="col-span-1">
            <el-icon class="w-full h-full">
              <component :is="section.icon" />
            </el-icon>
          </div>
          <div class="col-span-11">
            <span>{{ section.name }}</span>
          </div>
        </div>
        <ul v-show="showOptions === sectionKey" class="pl-5">
          <li v-for="(child, childKey) in section.childs" :key="childKey">
            <router-link :to="{ name: child.path }"
              class="grid w-full grid-cols-12 gap-4 p-3 rounded-sm hover:bg-ligthModeColors-red hover:text-ligthModeColors-background hover:dark:bg-darkModeColors-orange hover:dark:text-darkModeColors-background">
              <div class="col-span-1">
                <el-icon class="h-full 2-full">
                  <component :is="child.icon" />
                </el-icon>
              </div>
              <div class="col-span-11">
                <span>{{ child.name }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="text-2xl">
      <el-icon class="cursor-pointer" @click="changeTheme()" v-if="opciones.nigthMode">
        <Sunny />
      </el-icon>
      <el-icon class="cursor-pointer" @click="changeTheme()" v-else>
        <MoonNight />
      </el-icon>
    </div>
  </div>
</template>

