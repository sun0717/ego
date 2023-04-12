<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#4a73be" text-color="#fff"
            @open="handleOpen" active-text-color="#ffd04b" @close="handleClose" router
            :collapse="isCollapse">
            <el-menu-item>
                <span slot="title">易购后台管理系统</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-location"></i>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/goods">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
            </el-menu-item>
            <el-submenu index="/params">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>规格参数</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">规格与包装</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">订单列表</el-menu-item>
                    <el-menu-item index="4-2">退货管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/user">
                <i class="el-icon-setting"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
        </el-menu>
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
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="less" scoped>
.el-menu {
    border-right: 0;
    .el-menu-item.is-active {
        background-color: #054476 !important;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>