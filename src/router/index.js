import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../layouts/MainLayout2.vue'), 
        children: [
            // { path: '', component: () => import('../views/Home/Index.vue')},
            { path: 'home', component: () => import('../views/Home/Index.vue')},
            { path: 'organizations', component: () => import('../views/Organizations/Index.vue')},
            { path: 'employees', component: () => import('../views/Employees/Index.vue')},
            { path: 'roles', component: () => import('../views/Roles/Index.vue')},
            { path: 'permissions', component: () => import('../views/Permissions/Index.vue')},
            { path: 'translations', component: () => import('../views/Translations/Index.vue')},
            // { path: '', component: () => import('../views/Home/Index.vue')},
            // { path: '', component: () => import('../views/Home/Index.vue')},
            // { path: '', component: () => import('../views/Home/Index.vue')},
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})




export default router