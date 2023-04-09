<template>
    <div class="container">
        <div class="header">
            <i v-if="!isCollapse" class="iconfont icon-zhedie-shouqi" @click="changeMenu"></i>
            <i v-else class="iconfont icon-zhedie-zhankai" @click="changeMenu"></i>
        </div>
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    props: ['isCollapse'],

    data() {
        return {
            
        }
    },
    methods: {
        changeMenu() {
            this.$emit('changeMenu')
        }
    }
}
</script>
<style lang="less" scoped>
    .container {
        .header {
            height: 50px;
            line-height: 50px;
            background-color: #1e78bf;

            .iconfont {
                font-size: 25px;
                color: #fff;
            }
        }
    }
</style>