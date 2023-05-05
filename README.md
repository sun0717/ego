# ego

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目笔记

### 初始化

安装一些依赖

导入数据库

### 路由

### ui的属性

*show-overflow-tooltip*防止内容太多将表格撑大

### 组件封装

#### 分页

current-change: 改变时会触发 

```js
// 前端模拟分页 数组分割
this.searchList = res.result;
this.tableData = res.result.slice(0, 3);

this.total = res.result.length; // 总数
this.pageSize = 3; // 一页显示大小
```

### get请求传参方式

1. 字符串拼接 
2. params axios.get(url, {params: {search: xx}})

### 父子组件-弹窗

```vue
<Son refs="dialog">
<script>
    this.refs.dialog.attribute = true;
</script>
```

### Tree组件

配置props 

accordion 是否每次只打开一个同级树节点展开

node-click 节点被点击时的回调



Vue.prototype.$loading = Loading.service; 

Vue.prototype.$msgbox = MessageBox; 

Vue.prototype.$alert = MessageBox.alert; 

Vue.prototype.$confirm = MessageBox.confirm; 

Vue.prototype.$prompt = MessageBox.prompt; 

Vue.prototype.$notify = Notification; 

Vue.prototype.$message = Message;

都是一些按钮触发的

### 图片上传

action: 必填项，上传地址

on-preview 点击已上传文件的回调钩子

file-list：上传的文件列表



上传路径+拼接路径

```js
<el-upload class="upload-demo" ref="upload" :action="url" :on-preview="handlePreview" :on-remove="handleRemove"
:file-list="fileList" :auto-upload="false" :on-success="onSuccess">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

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
submitUpload() {
    this.$refs.upload.submit();
},
```

### 富文本编辑器

wangEditor

### 商品添加

### 删除功能

写接口

confirm确认框

row

### 商品编辑 

登录

路由元信息中有个matched数组，包含父路由和当前路由
