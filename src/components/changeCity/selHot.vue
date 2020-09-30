<template>
    <div class="m-hcity">
        <dl>
            <dt>{{ title + '：'}}</dt>
            <dd @click="changeCity(item.name)" v-for="(item,index) in dataList" :key="item.name+'_'+index">
                <router-link :to="{name:'index'}">{{ item.name }}</router-link>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:[
        'dataList',
        'title',
    ],
    methods:{
        changeCity(city){
            this.$store.state.curCity = city
        }
    }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/hot.scss"
</style>