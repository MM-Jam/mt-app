<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classifyList" :key="item.title">
        <m-select :title="item.title" :detailList="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.title">
        <m-select :title="item.title" :detailList="item.subList" />
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
import mSelect from "./select.vue";
export default {
  data() {
    return {
      classifyList: [],
      areaList: [],
    };
  },
  created() {
    api.getClassifyList().then((res) => {
      if (res.data.status === "success") {
        this.classifyList = res.data.data;
      }
    });
    api.getArea().then((res) => {
      let data = res.data+']}';
      this.areaList = JSON.parse(data).data
    });
  },
  components: {
    mSelect,
  },
};
</script>