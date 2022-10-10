import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from "vue-router"
import NProgress from "@/utils/progress"
import exceptionRoutes from "@/router/route.exception"
import commonRoutes from "@/router/route.common"
import { hasAuth } from "@/utils/auth"

const routes: RouteRecordRaw[] = [...commonRoutes, ...exceptionRoutes]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from) => {
    console.log("全局路由前置守卫：to,from\n", to, from)

    // 检查路由权限
    if (to.meta.auth) {
        hasAuth(to.meta.auth as string)
    }
    // 设置页面标题
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
    if (!NProgress.isStarted()) {
        NProgress.start()
    }
})

router.afterEach((to, from) => {
    console.log("全局路由后置守卫：to,from\n", to, from)
    NProgress.done()
})

export default router
