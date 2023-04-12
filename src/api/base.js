export default {
  baseUrl: "http://localhost:8989", // 域名
  goodsList: "/api/projectList", // 商品列表
  searchList: "/api/search", // 搜索
  selectCategory: '/api/backend/itemCategory/selectItemCategoryByParentId', // 类目选择
  // selectCategoryByType: '/api/backend/itemCategory/selectItemCategoryByParentType',
  // selectCategoryByNodeType: '/api/backend/itemCategory/selectItemCategoryByParentNode'
  uploadUrl: '/api/api/upload', // 图片上传,
  addGoods: '/api/backend/item/insertTbItem', // 商品添加
  deleteGoods: '/api/backend/item/deleteItemById', // 商品删除,
  updateGoods: '/api/backend/item/updateTbItem', // 商品修改
  login: '/api/login' // 登录
};