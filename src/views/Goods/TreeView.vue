<template>
    <div>
        <el-tree :props="props" lazy :load="loadNode" accordion @node-click="nodeClick"></el-tree>
    </div>
</template>
<script>
import { reqGetCategory } from '@/api/index';
export default {
    data() {
        return {
            props: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf',
            }
        };
    },
    methods: {
        async loadNode(node, resolve) {
            if (node.level === 0) {
                // 页面加载，获取第一层数据
                try {
                    const res = await reqGetCategory();
                    return resolve(res.result);
                } catch (error) {
                    console.log(error);
                }
                        
            }
            if (node.level >= 1) {
                try {
                    // const res = await reqGetCategoryByNode({cid: node.data.cid});
                    const res = await reqGetCategory({id: node.data.cid});
                    if (res.status == 200) {
                        return resolve(res.result);
                    } else {
                        return resolve([]);
                    }
                } catch (error) {
                    console.log(error);
                } 
            }
        },
        nodeClick(data, node) {
            console.log(data, node);
            this.$emit('sendTreeData', data);
        }
    }
}
</script>
<style></style>