<template>
    <div class="goods">
        <!-- 1.搜索区域 -->
        <div class="header">
            <el-input v-model="keyword" place-holder="请输入内容" size="medium" @change="toSearch"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button type="primary" @click="toAdd">添加</el-button>
            <el-button type="primary" @click="addDialog">弹窗添加</el-button>
        </div>

        <!-- 2.表格 -->
        <div class="wrapper">
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="商品ID" width="100">
                </el-table-column>
                <el-table-column prop="title" label="商品名称" width="100">
                </el-table-column>
                <el-table-column prop="price" label="商品价格" width="100">
                </el-table-column>
                <el-table-column prop="num" label="商品数量" width="100">
                </el-table-column>
                <el-table-column prop="category" label="规格类目" width="100">
                </el-table-column>
                <el-table-column prop="image" label="商品图片" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="descs" label="商品描述" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="address" label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 按钮区域 -->

        <!-- 分页 -->
        <MyPagination :total="total" :pageSize="pageSize" :currentPage="currentPage" @changePageNum="getPageNum" />

        <!-- 弹窗组件 -->
        <GoodsDialog ref="dialog" :title="title" :rowData="rowData"/>
    </div>
</template>
<script>
import { reqDeleteGoods, reqGetGoodsList, reqGetSearchList } from '@/api/index';
import MyPagination from '@/components/MyPagination';
import GoodsDialog from './GoodsDialog.vue';
export default {
    components: {
        MyPagination,
        GoodsDialog
    },
    data() {
        return {
            keyword: '',
            tableData: [

            ],
            searchList: [

            ],
            total: 10,
            currentPage: 1,
            pageSize: 1,
            temp: 1, // 1:查询所有商品分页 2：查询搜索列表的分页
            title: '商品添加', // 弹窗的标题
            rowData: {} // 整行数据
        }
    },
    created() {
        this.getGoodsList(1);
    },
    methods: {
        /**
         * 根据页码查询商品列表
         * @param {页码} pageNum 
         */
        async getGoodsList(pageNum) {
            try {
                const res = await reqGetGoodsList({ page: pageNum });
                this.tableData = res.data;
                this.total = res.total;
                this.pageSize = res.pageSize;
            } catch (error) {

            }
        },
        // 去搜索
        async toSearch(val) {
            if (!val) {
                this.getGoodsList(1);
                this.temp = 1;
                return;
            }
            try {
                const res = await reqGetSearchList({ search: val });
                this.currentPage = 1;
                if (res.status == 200 && res.result.length != 0) {
                    this.searchList = res.result;
                    this.tableData = res.result.slice(0, 3);
                    this.total = res.result.length; // 总条数
                    this.pageSize = 3; // 一页显示3条
                    this.temp = 2;
                } else {
                    // 无数据处理
                    this.tableData = [];
                    this.total = 0; // 总条数
                    this.pageSize = 1; // 
                    this.temp = 1;
                }
            } catch (error) {
                console.log(error);
                this.tableData = [];
                this.total = 0; // 总条数
                this.pageSize = 1; // 
                this.temp = 1;
            }
        },

        /**
         * 父组件接收 分页子组件传来的页码
         */
        getPageNum(page) {
            this.currentPage = page;
            if (this.temp == 1) {
                this.getGoodsList(page); //所有商品
            } else {
                // 搜索分页，切割数据
                this.tableData = this.searchList.slice((page - 1) * 3, page * 3);
            }
        },

        /**
         * 跳转到新页面去添加
         */
        toAdd() {
            this.$router.push('/add-goods');
        },

        // 弹窗 添加商品页面
        addDialog() {
            this.$refs.dialog.dialogVisible = true;
            this.title = '商品添加';
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.$refs.dialog.dialogVisible = true;
            this.title = '商品编辑';
            // 给子组件传值
            // 解构赋值给一个新的对象
            this.rowData = {...row};
        },
        handleDelete(index, row) {
            // console.log(index, row);
            // await reqDeleteGoods({params: row.id})
            this.$confirm('确定删除吗?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '再想想'
            }).then(async res => {
                // await reqDeleteGoods(row.id)
                // console.log('确认');
                // this.getGoodsList(1);
                try {
                    const res = await reqDeleteGoods({ id: row.id });
                    console.log(res);
                    if (res.status == 200) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getGoodsList(1);
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        })
                    }
                } catch (err) {
                    console.log(err);
                }
            }).catch(err => {
                console.log('取消');
            })
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