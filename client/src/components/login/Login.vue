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
  status: false as Boolean,
  jwt: '' as string
})
const objPrintInfo = ref<Object>({
  error: false,
  show: false,
  msg: ''
})

const changeTypePasswordInput = () => {
  showPassword.value = !showPassword.value
}

const router = useRouter()

const toDashBoard = async () => {
  try {
    const data: AxiosResponse = await axios.post('http://localhost:3000/login/checkUserCredentials', { name: formLogin.value.name, password: formLogin.value.password })
    response.value = await data.data
    localStorage.setItem('token', response.value.jwt)
    objPrintInfo.value = {
      msg: `Bienvenido de nuevo ${formLogin.value.name}`,
      color: 'green',
      show: true
    }
    setTimeout(() => {
      router.push({
        path: '/dashboard'
      })
    }, 2000)
  } catch (e) {
    objPrintInfo.value = {
      msg: `Usuario no encontrado`,
      color: 'red',
      show: true
    }
    setTimeout(() => {
      objPrintInfo.value = {
        msg: ``,
        color: '',
        show: false
      }
    }, 2000)

  }
}

</script>
<template >
  <div class="flex justify-center items-center h-screen w-screen">
    <main>
      <div
        class="grid grid-row justify-center items-center bg-gradient-to-tl from-orange from-50%  to-ligthOrange to-50% h-[24rem] w-[28rem] rounded-sm p-4">
        <div class="grid grid-col ">
          <input class="mb-4 p-4 bg-dark text-orange border-0 outline-none rounded-sm w-[20rem] placeholder-orange text-center"
            v-model="formLogin.name" placeholder="Nombre de usuario" />

          <input v-model="formLogin.password" :type="showPassword ? 'password' : 'text'"
            class="mb-4 p-4 bg-dark text-orange border-0 outline-none rounded-sm w-[20rem] placeholder-orange text-center"
            placeholder="Contraseña" />
            <button class="text-orange bg-dark px-4 py-2 rounded-sm w-52 text-center" @click="toDashBoard()">
            Inicia sesión
          </button>
          <span v-if="objPrintInfo.show" :class="`text-center bg-${objPrintInfo.color}-500 p-2 rounded mt-4 self-center`">
            {{ objPrintInfo.msg }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>