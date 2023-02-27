<template lang="">
  <div>
    <el-table :data='dataTable' stripe :header-cell-style="{ background: 'rgb(19, 30, 37)'}" :cell-style="{background: 'rgb(19, 30, 37)'}" >
      <el-table-column v-for='(column,key) in columns' :key='key' :prop='column.prop' :label='column.label'></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import type {Ref} from 'vue'
import {ref,defineProps} from 'vue'
defineProps({
  dataTable:Array,
  columns:Array
})

</script>
<style lang="">
  
</style>