<template>
    <div class="container">
        <div class="login">
            <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        };
        var validatePwd = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePwd, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('toLogin', this.loginForm)
                    // 跳转
                    this.$router.push("/");
                } else {
                    this.$message.error('账号或密码不合法!');
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
.container {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #4a73be;
    justify-content: center;
    align-items: center;

    .login {
        width: 400px;
        height: 250px;
        padding: 20px;
        background-color: #fff;
        border-radius: 25px;

    }
}
</style>