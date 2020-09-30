<template>
  <div class="page-changeCity">
    <el-row>
      <i-select />
    </el-row>
    <el-row>
      <sel-hot :dataList="hotCityList" title="热门城市" />
    </el-row>
    <el-row>
      <sel-hot :dataList="recentList" title="最近搜索" />
    </el-row>
    <el-row>
      <my-category />
    </el-row>
  </div>
</template>
<script>
import iSelect from "@/components/changeCity/iSelect.vue";
import selHot from "@/components/changeCity/selHot.vue";
import myCategory from "@/components/changeCity/category.vue";
import api from "@/api/index.js";
export default {
  components: {
    iSelect,
    selHot,
    myCategory,
  },
  data() {
    return {
      hotCityList: [],
      recentList: [],
    };
  },
  created() {
    api.getHotCity().then((res) => {
      if (res.data.status === "success") {
        //   console.log(res.data.data)
        this.hotCityList = res.data.data;
      }
    });
    api.getRecentCity().then((res) => {
      if (res.data.status === "success") {
          console.log(res.data.data)
        this.recentList = res.data.data;
      }
    });
  },
};
</script>