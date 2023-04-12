import Home from "@/views/Home";
import Layout from "@/views/Layout/Layout";
import Login from "@/views/Login";
import Vue from "vue";
import VueRouter from "vue-router";

// 异步
const Goods = () => import("@/views/Goods/index.vue");
const Params = () => import("@/views/Params");
const Order = () => import("@/views/Params");
const Advert = () => import("@/views/Advert");
const User = () => import("@/views/User");
const AddGoods = () => import("@/views/Goods/AddGoods.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    // 路由元信息，配置给父组件，拦截下面的所有组件
    meta: {
      isLogin: true,
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "goods",
        name: "Goods",
        component: Goods,
      },
      {
        path: "add-goods",
        name: "AddGoods",
        component: AddGoods,
      },
      {
        path: "params",
        name: "Params",
        component: Params,
      },
      {
        path: "order",
        name: "Order",
        component: Order,
      },
      {
        path: "advert",
        name: "Advert",
        component: Advert,
      },
      {
        path: "user",
        name: "User",
        component: User,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
