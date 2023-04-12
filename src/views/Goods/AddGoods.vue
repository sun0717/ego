<template>
    <div class="add-goods">
        <!-- 面包屑导航 -->
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/goods' }">商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品添加</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 表单 -->
        <div class="myForm">
            <el-form :model="goodsForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="类目选择">
                    <el-button type="primary">类目选择</el-button>
                </el-form-item>
                <el-form-item label="商品名称" prop="title">
                    <el-input v-model="goodsForm.title"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="price">
                    <el-input v-model="goodsForm.price"></el-input>
                </el-form-item>
                <el-form-item label="商品数量" prop="num">
                    <el-input v-model="goodsForm.num"></el-input>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="11">
                        <el-form-item>
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" v-model="goodsForm.date1"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item>
                            <el-time-picker placeholder="选择时间" style="width: 100%;" v-model="goodsForm.date2"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item label="商品卖点">
                    <el-input v-model="goodsForm.sellPoint"></el-input>
                </el-form-item>
                <el-form-item label="商品图片">
                    <el-button>上传图片</el-button>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input v-model="goodsForm.descs"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 表单数据对象
            goodsForm: {
                title: '', // 商品名称
                price: '', // 价格
                num: '', // 数量 
                date1: '',
                date2: '',
                descs: '', // 商品描述
                sellPoint: '',
                image: '' // 上传图片
            },
            rules: {
                title: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入商品价格', trigger: 'blur' }
                ],
                num: [
                    { required: true, message: '请选择商品数量', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="less" scoped>
.add-goods {
    padding: 20px;

    .title {
        background-color: #fff;
        padding: 10px;
        border: 1px solid #f7f7f7;
    }

    .myForm {
        padding: 20px;

        .line {
            text-align: center;
        }
    }
}
</style>