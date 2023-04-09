import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Layout from "@/views/Layout/Layout";
import Home from "@/views/Home";

// 异步
const Goods = () => import("@/views/Goods");
const Params = () => import("@/views/Params");
const Order = () => import("@/views/Params");
const Advert = () => import("@/views/Advert");
const User = () => import("@/views/User");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "goods",
        name: "Goods",
        component: Goods
      },
      {
        path: "params",
        name: "Params",
        component: Params
      },
      {
        path: "order",
        name: "Order",
        component: Order
      },
      {
        path: "advert",
        name: "Advert",
        component: Advert
      },
      {
        path: "user",
        name: "User",
        component: User 
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
