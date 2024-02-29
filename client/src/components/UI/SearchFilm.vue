<script setup lang="ts">
import { FilmInterface } from '@types';
import { Input, Button, Select } from "@componentsUI/index"

const props = defineProps({
	// inputValue: String,
	error: Object,
	// films: Array<FilmInterface>,
	searchMode: Boolean
})
const emit = defineEmits(['search', 'updateFilmSelection'])


const handleSearch = () => {
	emit('search')
}
const updateFilmSelection = (params: FilmInterface) => {
	emit('updateFilmSelection', params)
}

const inputValue = defineModel('inputValue')
const films = defineModel('filmValue')
const searchMode = defineModel('searchMode')

</script>
<template>
	<div class="grid grid-cols-12 gap-4">
		<Input v-model="inputValue" class="col-span-12 lg:col-span-10" type="text"
			placeholder="Ingresa el nombre de tu pelicula" />
		<Button @click="handleSearch" class="col-span-12 lg:col-span-2" />
		<span class="col-span-12 text-center" v-if="error.visible">
			{{ error.text }}
		</span>
		<Select :items="films" @updateFilmSelection="updateFilmSelection" class="col-span-12" :search-mode="searchMode" />
	</div>
</template>
