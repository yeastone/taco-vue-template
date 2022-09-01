import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'), 
    redirect:"/login",
    children:[
        {
            path:'/login',
            name:'login',
            component: () => import('@/views/login/index.vue'),
        }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
