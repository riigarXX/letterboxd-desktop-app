<template lang="">
    <el-card>
      <span class='title'>Opciones</span>
      <el-divider/>
      <div class='cardOptions'>
        Modo oscuro 
        <el-switch @click='changeOSTheme()' v-model="opciones.nigthMode"/>
      </div>
    </el-card>
</template>
<script lang="ts" setup>
import { ipcRenderer } from 'electron';
import { ref } from 'vue';

const opciones = ref <Object> ({
  nigthMode:Boolean,
})

const changeOSTheme = () => {
  ipcRenderer.invoke('dark-mode')
}
</script>
<style lang="">
  
</style>