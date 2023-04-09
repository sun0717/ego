<template>
    <div class="layout">
        <!-- 左侧菜单栏 -->
        <MyMenu class="menu" :isCollapse="isCollapse"/>
        <!-- 右侧内容区 -->
        <Content class="content" @changeMenu="changeMenu" :isCollapse="isCollapse" :class="{active: isCollapse}"/>
    </div>
</template>
<script>
import MyMenu from './MyMenu.vue';
import Content from './Content.vue';
export default {
    components: {
        MyMenu,
        Content
    },
    data() {
        return {
            isCollapse: false, // 折叠
        }
    },
    methods: {
        /**
         * 父组件接收事件
         */
        changeMenu() {
            this.isCollapse = !this.isCollapse;       
        }
    }
}
</script>
<style lang="less" scoped>
.layout {
    // display: flex;
    position: relative;
    .menu {
        position: fixed;
        top: 0;
        bottom: 0;
        // min-height: 500px;
        background-color:#4a73be;
    }
    .content {
        margin-left: 200px;

    }
    .active {
        margin-left: 64px;
    }
}
</style>