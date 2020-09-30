<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <classify-list />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <my-container />
    </el-row>
  </div>
</template>
<script>
import ClassifyList from "@/components/main/ClassifyList.vue";
import MyLife from "@/components/main/MyLife.vue";
import MyContainer from '@/components/main/container.vue'
export default {
  components: {
    ClassifyList,
    MyLife,
    MyContainer
  },
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>