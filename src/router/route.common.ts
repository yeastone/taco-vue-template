import { RouteRecordRaw } from "vue-router"

const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/index.vue"),
        redirect: "/login",
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/views/login/index.vue"),
                meta: {
                    title: "登录",
                },
            },
            {
                path: "/datav",
                name: "datav",
                component: () => import("@/views/dataV/index.vue"),
                meta: {
                    title: "大屏",
                },
            },
        ],
    },
]

export default commonRoutes
