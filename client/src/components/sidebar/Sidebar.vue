<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    active-text-color="rgb(255, 124, 0)"
    background-color="rgb(255, 163, 77) 24.4%"
    text-color="rgb(255, 163, 77)"
    class="sidebar"
    >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><User /></el-icon>
        <span>Perfil</span>
      </template>
      <el-menu-item-group>
        <!-- <template #title><span>Group One</span></template> -->
        <router-link to="/peliculas">
          <el-menu-item index="1-1">Mis peliculas</el-menu-item>
        </router-link>
        <router-link to="/pendientes">
          <el-menu-item index="1-1">Mis pendientes</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-sub-menu>
    <router-link to="/settings" >
      <el-menu-item index="4" >
        <el-icon><setting /></el-icon>
        <template #title>Opciones</template>
      </el-menu-item>
    </router-link>
    <router-link to="/" >
      <el-menu-item index="4" >
        <el-icon><CircleCloseFilled /></el-icon>
        <template #title>Cerrar sesion</template>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Location,
  Setting,
  User,
  CircleCloseFilled
} from '@element-plus/icons-vue'


let isCollapse = ref(false)

</script>