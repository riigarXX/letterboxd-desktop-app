<template lang="">
  <div>
    <el-card>
      <template #header>
      <div class="card-header">
        <span class='title'>Rutina</span>
        <span class='date'>{{$moment().format('YYYY-MM-DD')}}</span>
      </div>
    </template>
      <Calendar/>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import Calendar from '../UI/Calendar.vue'

defineComponent({
  Calendar
})

</script>
