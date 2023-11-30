<script setup lang="ts">
import Card from "../UI/Card.vue";
import { onMounted } from "vue";
import movieApi from "../../api/movieApi";

onMounted(async () => {
  await movieApi.getTrends();
});
</script>
<template>
  <Card title="Tendencias"> </Card>
</template>
