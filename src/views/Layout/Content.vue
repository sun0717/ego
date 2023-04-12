<template>
    <div class="container">
        <div class="header">
            <i v-if="!isCollapse" class="iconfont icon-zhedie-shouqi" @click="changeMenu"></i>
            <i v-else class="iconfont icon-zhedie-zhankai" @click="changeMenu"></i>
            <div class="user">
                <span>欢迎, {{ userinfo.username }}</span>
                <i class="el-icon-switch-button" @click="loginout"></i>
            </div>
        </div>
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ['isCollapse'],
    computed: {
        ...mapState(['userinfo'])
    },  
    data() {
        return {
            
        }
    },
    methods: {
        changeMenu() {
            this.$emit('changeMenu')
        },
        // 退出登录
        loginout() {
            this.$store.commit('CLEARUSER');
            this.$router.go(0);
        }
    }
}
</script>
<style lang="less" scoped>
    .container {
        .header {
            position: relative;
            height: 50px;
            line-height: 50px;
            background-color: #1e78bf;
            color: #fff;
            .iconfont {
                font-size: 25px;
                
            }

            .user {
                display: inline-block;
                position: absolute;
                right: 20px;

                i {
                    font-size: 20px;
                }
            }
        }
    }
</style>