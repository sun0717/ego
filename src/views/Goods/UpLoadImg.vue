<template>
    <div>
        <el-upload class="upload-demo" ref="upload" :action="url" :on-preview="handlePreview" :on-remove="handleRemove"
            :file-list="fileList" :auto-upload="false" :on-success="onSuccess">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
import base from '@/api/base'
export default {
    data() {
        return {
            url: base.uploadUrl, // 存放图片的服务器地址
            fileList: []
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        onSuccess(response, file, fileList) {
            console.log('上传成功: ', response, file, fileList);
            this.$message({
                message: '图片上传成功!',
                type: 'success'
            });
            let imgUrl = base.baseUrl + '/' + response.url.slice(7);
            // 向父组件传值
            this.$emit('sendImg', imgUrl);
        }
    }
}
</script>
<style></style>