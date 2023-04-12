import router from './index';
import store from '@/store/index';
// 路由拦截
router.beforeEach((to, from, next) => {
    let isLogin = to.matched.some(item => item.meta.isLogin)
    if (isLogin) {
        let token = store.state.userinfo.token;
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})