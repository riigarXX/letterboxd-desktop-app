<template lang="">
    <el-container class="container">
      <el-main>
        <el-card>{{entrenamiento}}</el-card>
      </el-main>
    </el-container>
</template>
<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import type {Ref} from "vue"
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
import Entrenamiento from "../../../../server/types/Entrenamiento"
const route = useRoute()

onMounted(() => {
  loadUserDayTraining()
})

let entrenamiento = ref<Entrenamiento>()
const loadUserDayTraining = () => {
  axios.post('http://localhost:3000/calendar/loadUserDayTraining',{idFirebase:route.params.idFirebase}).then(({data}:AxiosResponse<Entrenamiento>) => {
    entrenamiento.value = data
  })
}

</script>
<style lang="">
  
</style>