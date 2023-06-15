<script lang="ts" setup>
</script>
<template lang="">
  <div>
    <el-container class="container">
      <el-main>
        <el-card>
          <template #header>
            <div class="card-header">
              <span class='title'>Agrega tu pelicula</span>
              <span class='date'>{{$moment().format('YYYY-MM-DD')}}</span>
            </div>
          </template>
          <Form/>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { onMounted,ref ,Ref} from 'vue';
import { useRoute } from 'vue-router';
import Form from '../UI/Form.vue'
import Film from "../../../../server/types/Film"
import api from '../../api/axiosInstance';

const route = useRoute()



const saveFilm = () => {
  api.post('/film/saveFilm',{day:route.params.day}).then(({data}:AxiosResponse) => {
    film.value = data
  })
}

</script>