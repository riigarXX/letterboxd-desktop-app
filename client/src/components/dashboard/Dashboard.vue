<template lang="">
    <el-container class="container">
      <el-aside class="sidebarView">
        <Sidebar/>
      </el-aside>
      <el-main class='mainView'>
        <MainView/>
      </el-main>
    </el-container>
</template>
<script >
import Sidebar from '../sidebar/Sidebar.vue'
import MainView from '../main/Main.vue'

export default {
  components:{
    Sidebar,
    MainView
  }
}
</script>