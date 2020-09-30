<template>
    <div class="block">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,index) in imgsList" :key="index">
          <img :src="item" :alt="index" style="width:550px">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return {
            imgsList:[
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            ]
        }
    }
}
</script>