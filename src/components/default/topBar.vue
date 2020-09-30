<template>
  <div class="m-header-topbar">
    <el-row>
      <el-col :span="10">
          <my-geo />
      </el-col>
      <el-col :span="14">
          <my-nav />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import myGeo from "./geo.vue";
import myNav from "./nav.vue";
export default {
    components:{
        myGeo,
        myNav
    }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>