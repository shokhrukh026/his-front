import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../layouts/MainLayout2.vue'), 
        children: [
            // { path: '', component: () => import('../views/Home/Index.vue')},
            { path: 'home', component: () => import('../views/Home/Index.vue')},
            
            { path: 'organizations', component: () => import('../views/Organizations/Index.vue')},
            { path: 'organizations/create/:id', component: () => import('../views/Organizations/Create.vue')},
            { path: 'organizations/show/:id', component: () => import('../views/Organizations/Show.vue')},
            { path: 'organizations/update/:id', component: () => import('../views/Organizations/Update.vue')},

            { path: 'employees', component: () => import('../views/Employees/Index.vue')},
            { path: 'employees/create/:id', component: () => import('../views/Employees/Create.vue')},
            { path: 'employees/show/:id', component: () => import('../views/Employees/Show.vue')},
            { path: 'employees/update/:id', component: () => import('../views/Employees/Update.vue')},

            { path: 'roles', component: () => import('../views/Roles/Index.vue')},
            { path: 'roles/show/:id', component: () => import('../views/Roles/Show.vue')},
            { path: 'roles/update/:id', component: () => import('../views/Roles/Update.vue')},

            { path: 'permissions', component: () => import('../views/Permissions/Index.vue')},
            { path: 'permissions/show/:id', component: () => import('../views/Permissions/Show.vue')},
            { path: 'permissions/update/:id', component: () => import('../views/Permissions/Update.vue')},

            { path: 'translations', component: () => import('../views/Translations/Index.vue')},
        ]
    },
    { 
        path: '/login', 
        component: () => import('../layouts/EmptyLayout.vue'), 
        children: [
            { path: '', component: () => import('../views/Login/Index.vue')},
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})




export default router