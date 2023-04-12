<template>
    <div>
        <!-- title: 标题 -->
        <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
            <div class="myForm">
                <el-form :model="goodsForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="类目选择" prop="category">
                        <el-button type="primary" @click="innerVisible = true">类目选择</el-button>
                        <span>{{ goodsForm.category }}</span>
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
                                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
                                    v-model="goodsForm.date1"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item>
                                <el-time-picker placeholder="选择时间" style="width: 100%;"
                                    v-model="goodsForm.date2"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="商品卖点" prop="sellPoint">
                        <el-input v-model="goodsForm.sellPoint"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图片" prop="image">
                        <el-button @click="innerVisibleImg = true">上传图片</el-button>

                        <img :src="goodsForm.image" style="width: 100px;margin-left: 10px;" alt="">
                    </el-form-item>
                    <el-form-item label="商品描述" prop="descs">
                        <WangEditor ref="myEditor" @editorChange="listenEditorChange" />
                    </el-form-item>
                </el-form>
            </div>

            <!-- 弹窗底部按钮 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetForm">取 消</el-button>
                <el-button type="primary" @click="submitForm">确 定</el-button>
            </span>

            <!-- 内弹框 类目选择-->
            <el-dialog width="30%" title="类目选择" :visible.sync="innerVisible" append-to-body>
                <TreeView @sendTreeData="getTreeData" />
                <span slot="footer" class="dialog-footer">
                    <el-button @click="innerVisible = false">取 消</el-button>
                    <el-button type="primary" @click="showTreeData">确 定</el-button>
                </span>
            </el-dialog>

            <!-- 内弹框 图片上传-->
            <el-dialog width="30%" title="图片上传" :visible.sync="innerVisibleImg" append-to-body>
                <UpLoadImg @sendImg="getImgURL" />
                <span slot="footer" class="dialog-footer">
                    <el-button @click="innerVisibleImg = false">取 消</el-button>
                    <el-button type="primary" @click="showImgUrl">确 定</el-button>
                </span>
            </el-dialog>
        </el-dialog>
    </div>
</template>
<script>
import { reqAddGoods, reqUpdateGoods } from '@/api/index';
import TreeView from './TreeView.vue';
import UpLoadImg from './UpLoadImg.vue';
import WangEditor from './WangEditor.vue';
export default {
    components: {
        TreeView,
        UpLoadImg,
        WangEditor
    },
    props: ['title', 'rowData'],
    data() {
        return {
            dialogVisible: false,
            innerVisible: false, // 内弹窗显示与隐藏
            innerVisibleImg: false,
            treeData: {},
            // 表单数据对象
            goodsForm: {
                cid: '',
                category: '',
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
    watch: {
        rowData(val) {
            this.goodsForm = val;
            // html 在 mounted 挂载好dom后拿到, watch 在created 拿到,
            this.$nextTick(() => {
                this.$refs.myEditor.html = val.descs;
            });
        }
    },
    methods: {
        /**
         * 接收 tree 子组件传递过来的数据
         * @param {} val 
         */
        getTreeData(val) {
            this.treeData = val;
        },
        /**
         * 点击确定
         */
        showTreeData() {
            this.innerVisible = false;
            this.goodsForm.category = this.treeData.name;
            this.goodsForm.cid = this.treeData.cid;
        },
        /**
         * getImgURL 接收上传图片子组件传递过来的数据
         */
        getImgURL(url) {
            this.imgURL = url;
        },
        /**
         * 展示图片
         */
        showImgUrl() {
            // 图片上传隐藏
            this.innerVisibleImg = false;
            this.goodsForm.image = this.imgURL;
        },
        listenEditorChange(val) {
            this.goodsForm.descs = val;
        },
        /**
         * 提交表单
         */
        submitForm() {
            this.$refs.ruleForm.validate(async (valid) => {
                if (valid) {
                    console.log(this.goodsForm);
                    if (this.title == '商品添加') {
                        try {
                            const res = await reqAddGoods(this.goodsForm);
                            if (res.status == 200) { // 成功
                                // 子组件调父组件的getGoodsList方法
                                this.$parent.getGoodsList(1); // 更新父组件列表数据
                                this.$message({
                                    message: '添加成功!',
                                    type: 'success'
                                })
                                // resetForm();
                                // 清空表单
                                this.resetForm();
                            } else {
                                this.$message.error('添加失败!');
                            }
                        } catch (error) {
                            console.log(error);
                            this.$message.error('填写错误..');
                        }
                    } else {
                        try {
                            const res = await reqUpdateGoods(this.goodsForm);
                            console.log(res);
                            if (res.status == 200) {
                                this.$parent.getGoodsList(1); // 更新父组件列表数据
                                this.$message({
                                    message: '修改成功!',
                                    type: 'success'
                                });
                                this.resetForm();
                            } else {
                                this.$message.error('修改失败!');
                            }
                        } catch (error) {
                            console.log('修改失败');
                        }
                    }

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 清除表单
        resetForm() {
            this.dialogVisible = false; // 隐藏弹窗
            // 清空表单
            this.goodsForm = {
                cid: '',
                category: '',
                title: '', // 商品名称
                price: '', // 价格
                num: '', // 数量 
                date1: '',
                date2: '',
                descs: '', // 商品描述
                sellPoint: '',
                image: '' // 上传图片
            },
                this.$refs.myEditor.editor.clear();
        }
    }
}
</script>
<style lang="less" scoped>
.myForm {
    padding: 20px;

    .line {
        text-align: center;
    }
}
</style>