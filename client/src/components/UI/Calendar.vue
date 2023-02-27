<template>
  <div>
    <el-calendar>
      <template #date-cell="{ data }">
        <el-row>
          {{ data.day.split('-')[1] }} - {{ data.day.split('-')[2] }}
        </el-row>
        <div v-for="(item, index) in entrenamientos(data.day)" :key="index">
          <el-row >
            <el-col class="showTraining">
              <!--<router-link :to='`/entrenamientos/${item.idFirebase}`'>-->
                <el-button @click="loadTraining(item.idFirebase)" size="small">Ver entrenamiento</el-button>
              <!--</router-link>-->
            </el-col>
          </el-row>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, Ref } from "vue";
import axios, { AxiosResponse } from "axios";
import Entrenamiento from '../../../../server/types/Entrenamiento'
import { ElMessage, ElMessageBox } from "element-plus";
import { useRoute } from "vue-router";
import { ipcRenderer } from "electron";

onMounted(() => {
  loadTrainings()
})

const arrayData: Ref<Array<Entrenamiento>> = ref([])

const loadTrainings = () => {
  axios.get('http://localhost:3000/calendar/getTrainings').then((res: AxiosResponse<Array<Entrenamiento>>) => {
    arrayData.value = res.data
  })
}

const entrenamientos = (date: string) => {
  return arrayData.value.filter((item:Entrenamiento ) => {
    return date == item.fechaFormated
  })
};
const loadTraining = (idFirebase:string) => {
  ipcRenderer.invoke(`open-win`,(`entrenamientos/${idFirebase}`))
}

</script>