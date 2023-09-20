<script setup lang="ts">
import Sidebar from "../sidebar/Sidebar.vue";
import MainView from "../main/Main.vue";
</script>
<template>
  <div class="grid h-screen grid-cols-1 gap-4 lg:grid-cols-4">
    <div class="col-span-1 p-4 lg:col-span-1">
      <Sidebar />
    </div>
    <div class="col-span-1 p-4 lg:col-span-3">
      <div class="flex h-full items-center justify-center">
        <MainView />
      </div>
    </div>
  </div>
</template>
