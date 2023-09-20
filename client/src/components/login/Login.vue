<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { TurnOff, Open } from "@element-plus/icons-vue";
import ResponseMsgType from "../../types/ResponseMsgType";

let showPassword = ref<boolean>(true);

const formLogin = ref({
  name: "" as string,
  password: "" as string,
});
const response = ref({
  status: false as Boolean,
  jwt: "" as string,
});
const objPrintInfo = ref<ResponseMsgType>({
  color: "",
  show: false,
  msg: "",
});

const changeTypePasswordInput = () => {
  showPassword.value = !showPassword.value;
};

const router = useRouter();

const toDashBoard = async () => {
  try {
    const data: AxiosResponse = await axios.post(
      "http://localhost:3000/login/checkUserCredentials",
      { name: formLogin.value.name, password: formLogin.value.password },
    );
    response.value = await data.data;
    localStorage.setItem("token", response.value.jwt);
    objPrintInfo.value = {
      msg: `Bienvenido de nuevo ${formLogin.value.name}`,
      color: "green",
      show: true,
    };
    setTimeout(() => {
      router.push({
        path: "/dashboard",
      });
    }, 2000);
  } catch (e) {
    objPrintInfo.value = {
      msg: `Usuario no encontrado`,
      color: "red",
      show: true,
    };
    setTimeout(() => {
      objPrintInfo.value = {
        msg: ``,
        color: "",
        show: false,
      };
    }, 2000);
  }
};
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div
      class="flex h-[24rem] w-[28rem] flex-row items-center justify-center rounded-sm bg-gradient-to-tl from-ligthModeColors-red from-50% to-ligthModeColors-ligthRed to-50% p-4 dark:from-darkModeColors-orange dark:to-darkModeColors-ligthOrange"
    >
      <div
        class="grid grid-flow-row place-items-center justify-items-center gap-10"
      >
        <div class="col-span-full text-center">
          <input
            class="mb-10 w-[20rem] rounded-sm border-0 bg-ligthModeColors-background p-2 text-center text-ligthModeColors-red placeholder-ligthModeColors-red outline-none dark:bg-darkModeColors-background dark:text-darkModeColors-orange dark:placeholder-darkModeColors-orange"
            v-model="formLogin.name"
            placeholder="Nombre de usuario"
          />
          <input
            v-model="formLogin.password"
            :type="showPassword ? 'password' : 'text'"
            class="mb-10 w-[20rem] rounded-sm border-0 bg-ligthModeColors-background p-2 text-center text-ligthModeColors-red placeholder-ligthModeColors-red outline-none dark:bg-darkModeColors-background dark:text-darkModeColors-orange dark:placeholder-darkModeColors-orange"
            placeholder="Contraseña"
          />
          <button
            class="w-32 rounded-sm bg-ligthModeColors-background py-1 text-ligthModeColors-red dark:bg-darkModeColors-background dark:text-darkModeColors-orange"
            @click="toDashBoard()"
          >
            Inicia sesión
          </button>
        </div>
        <div class="col-span-full h-[20px] text-center">
          <span
            v-if="objPrintInfo.show"
            :class="`dark:bg-darkModeColors-lig  justify-around  rounded-sm  bg-ligthModeColors-background px-4 py-2 text-center text-ligthModeColors-red dark:bg-darkModeColors-background dark:text-darkModeColors-orange`"
          >
            {{ objPrintInfo.msg }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
