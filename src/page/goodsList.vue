<template>
  <div class="page-product">
    <el-row>
      <el-breadcrumb class="m-crumbs" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="el-breadcrumb">{{ $store.state.curCity }}美团</el-breadcrumb-item>
        <el-breadcrumb-item
          class="el-breadcrumb"
        >{{ $store.state.curCity }}{{ $store.state.searchValue }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
        <el-col :span="19">
            <goods-detail />
        </el-col>
        <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>
<script>
import goodsDetail from '@/components/goodsList/goodsDetail.vue'
export default {
    components:{
        goodsDetail,
    }
};
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>