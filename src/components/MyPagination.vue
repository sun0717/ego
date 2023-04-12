<template>
    <div class="pagination">
        <el-pagination background layout="total, prev, pager, next" :total="total" @current-change="changePageNum"
            :current-page="currentPage" :pageSize="pageSize">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props: {
        total: {
            type: Number,
            default: 100
        },
        pageSize: {
            type: Number,
            default: 10
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    methods: {
        /**
         * 分页子组件触发页码改变事件
         */
        changePageNum(page) {
            this.$emit('changePageNum', page);
        }
    }
}
</script>
<style lang="less" scoped>
.pagination {
    text-align: center;
    margin: 20px;
}
</style>