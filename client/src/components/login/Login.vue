<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios, { AxiosResponse } from 'axios';
import {
  TurnOff,
  Open
} from '@element-plus/icons-vue'

let showPassword = ref<boolean>(true)

const formLogin = ref({
  name: '' as string,
  password: '' as string
})
const response = ref({
  status: false as Boolean ,
  jwt:'' as string
})

const changeTypePasswordInput = () => {
  showPassword.value = !showPassword.value
}

const router = useRouter()

const toDashBoard = async () => {
  try {
    const data: AxiosResponse = await axios.post('http://localhost:3000/login/checkUserCredentials', { name: formLogin.value.name, password: formLogin.value.password })
    console.log(data)
    response.value = await data.data
    if (response.value.status) {
      localStorage.setItem('token',response.value.jwt)
      router.push({
        path: '/dashboard'
      })
    } else {
      console.log('usuario no encontrado')
    }
  } catch (e) {
    console.log(e)
  }
}

</script>
<template lang="">
  <div>
    <el-container class="container">
      <el-main class='mainLogin'>
        <div class='card-login'>
          <el-space direction='vertical' :size='40'>
            <el-space />
            <el-space />
            <el-input v-model="formLogin.name"/>
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