<template lang="">
  <div>
    <el-container class="container">
      <el-main>
        <div class='card-login'>
          <el-space direction='vertical' :size='40'>
            <!-- <span class='desktopLogoApp'>
              <img src="../../assets/img/electron-icon.svg">
            </span> -->
            <span class='title-login'>Inicia sesion</span>
            <el-input v-model="formLogin.email"/>
            <div class='inputPassword'>
              <el-input v-model="formLogin.password" :type='showPassword ?  "password" : "text" '/>
                <el-icon @click='changeTypePasswordInput()' class='iconShowPassword' v-if="showPassword"><TurnOff /></el-icon>
                <el-icon @click='changeTypePasswordInput()' class='iconShowPassword' v-else><Open /></el-icon>
            </div>
            <el-button class='buttonLogin' @click=toDashBoard()>Inicia sesion</el-button>
          </el-space>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import {
  TurnOff ,
  Open 
} from '@element-plus/icons-vue'

let showPassword = ref <boolean>(true)

const formLogin = ref <object> ({
  email:'' as string,
  password:'' as string
})

const changeTypePasswordInput = () => {
  showPassword.value = !showPassword.value
} 

const router = useRouter()

const toDashBoard = () => {
  router.push({
    path:'dashboard'
  })
}

</script>
<style lang="">
  
</style>