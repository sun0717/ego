<template>
    <div class="goods">
        <!-- 1.搜索区域 -->
        <div class="header">
            <el-input v-model="keyword" place-holder="请输入内容" size="medium"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button type="primary">添加</el-button>
            <el-button type="primary">弹窗添加</el-button>
        </div>

        <!-- 2.表格 -->
        <div class="wrapper">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="date" label="商品ID" width="100">
                </el-table-column>
                <el-table-column prop="name" label="商品名称" width="100">
                </el-table-column>
                <el-table-column prop="address" label="商品价格" width="100">
                </el-table-column>
                <el-table-column prop="address" label="商品数量" width="100">
                </el-table-column>
                <el-table-column prop="address" label="规格类目" width="100">
                </el-table-column>
                <el-table-column prop="address" label="商品图片">
                </el-table-column>
                <el-table-column prop="address" label="商品卖点">
                </el-table-column>
                <el-table-column prop="address" label="商品描述">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            keyword: '',
            tableData: [
                
            ]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>
<style lang="less" scoped>
.goods {
    padding: 20px;

    .header {
        display: flex;

        button {
            margin-left: 20px;
        }
    }

    .wrapper {
        padding: 20px 0;
    }
}
</style>