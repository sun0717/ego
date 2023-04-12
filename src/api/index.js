/**
 * 所有的请求函数
 */
import api from "./base";
import request from "./request";
import qs from "qs"
/***
 * 查询商品列表
 * 参数：page 页码
 ***/
export const reqGetGoodsList = (params) =>
  request.get(api.goodsList, { params });

export const reqGetSearchList = (params) =>
  request.get(api.searchList, { params });

/**
 * 请求类目选择
 * 参数： {id: cid}
 * selectCategory
 */
export const reqGetCategory = (params) =>
  request.get(api.selectCategory, { params });
/**
 * 请求类目选择
 * 参数： {type}
 * selectCategory
 */
export const reqGetCategoryByType = (params) =>
  request.get(api.selectCategoryByType, { params });

export const reqGetCategoryByNode = (params) =>
  request.get(api.selectCategoryByNodeType, { params });

/**
 * 添加商品
 */
export const reqAddGoods = (params) => request.get(api.addGoods, { params });
/**
 * 删除商品
 */
export const reqDeleteGoods = (params) =>
  request.get(api.deleteGoods, { params });
/**
 * 修改商品
 */
export const reqUpdateGoods = (params) =>
  request.get(api.updateGoods, { params });
/**
 * 登录
 */
export const reqLogin = (params) => request.post(api.login, qs.stringify(params));



  
