<template>
  <div class="m-header">
    <el-row>
        <top-bar/>
    </el-row>
    <el-row>
        <my-search />
    </el-row>
  </div>
</template>
<script>
import topBar from './topBar.vue';
import mySearch from './search.vue';
export default {
    components:{
        topBar,
        mySearch,
    }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss"
</style>