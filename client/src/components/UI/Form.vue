<script setup lang="ts">
  import {ref} from 'vue'
  const searchFilm = ref<String> ('')
</script>

<template >
    <div>
      <el-row>
        <el-col :span="22">
          <el-input v-model="searchFilm"/>
        </el-col>
        <el-col :span="2">
          <el-button style="height: 100%;">Busca tu pelicula</el-button>
        </el-col>
      </el-row>
      
    </div>
</template>