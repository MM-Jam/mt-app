<template>
    <div class="m-life">
        <el-row>
            <my-nav />
        </el-row>
        <el-row>
            <el-col :span="14">
                <my-slider />
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic"></div>
            </el-col>
            <el-col :span="6">
                <my-login />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="m-life-hotel"></div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"></div>
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"></div>
            </el-col>
            <el-col :span="6">
                <download />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import myNav from './mainNav.vue'
import mySlider from './slider.vue'
import myLogin from './myLogin.vue'
import download from './download.vue'
export default {
    components:{
        myNav,
        mySlider,
        myLogin,
        download
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/index/life.scss";
</style>