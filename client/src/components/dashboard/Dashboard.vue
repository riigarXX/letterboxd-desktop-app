<script setup lang="ts">
import Sidebar from "../sidebar/Sidebar.vue";
import MainView from "../main/Main.vue";
import Container from "../UI/Container.vue";
</script>
<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
    <div class="col-span-1 p-4 lg:col-span-1">
      <Sidebar />
    </div>
    <div class="col-span-1 lg:col-span-3">
      <Container>
        <MainView />
      </Container>
    </div>
  </div>
</template>
