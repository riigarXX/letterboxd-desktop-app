<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Card, Container } from '@componentsUI/index'
import { api } from '@apis/index';
import { RoutesInterface } from "@types"

const routes = ref<RoutesInterface>()

const loadAllRoutes = async () => {
    await api.get('/routes/getAllRoutes').then((res: RoutesInterface) => {
        routes.value = res.data.routes
    }).catch(e => {
        console.log(e);
    })
}
const dict = {
    POST: "",
    GET: "",
    DELETE: "",
    UPDATE: ""
}
onMounted(() => {
    loadAllRoutes()
})
</script>
<template>
    <Container>
        <Card :title="'Rutas'">
            <div class="mx-4 overflow-hidden rounded-lg ">
                <table class="w-full table-fixed">
                    <thead class="bg-darkModeColors-orange">
                        <!-- <th v-for="nameRoute in Object.keys(routes[0])" :key="nameRoute">
                        {{ nameRoute }}
                    </th> -->
                        <tr>
                            <th class="w-1/4 px-6 py-4 font-bold text-left uppercase text-darkModeColors-background">1</th>
                            <th class="w-1/4 px-6 py-4 font-bold text-left uppercase text-darkModeColors-background">2</th>
                            <th colspan="2"
                                class="w-1/4 px-6 py-4 font-bold text-left uppercase text-darkModeColors-background">3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="route in routes" :key="route.path" class="">
                            <td class="px-6 py-4 border-b border-gray-200">{{ route.path }}</td>
                            <td class="px-6 py-4 border-b border-gray-200" v-for="routeName in route.methods"
                                :key="routeName">
                                <span> {{ routeName }} </span>
                            </td>
                            <td class="px-6 py-4 border-b border-gray-200" v-for="middleware in route.middlewares"
                                :key="middleware">
                                {{ middleware }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    </Container>
</template>

  