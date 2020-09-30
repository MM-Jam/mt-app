<template>
  <div class="layout-default">
    <el-container>
      <el-header style="height:auto">
        <my-header class="m-header"/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height:auto">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import myHeader from "@/components/default/header.vue"
import myFooter from '@/components/default/footer.vue'
export default {
  components:{
    myHeader,
    myFooter
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  // footer{
  //   height:0px
  // }
</style>