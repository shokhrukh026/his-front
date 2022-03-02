import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../layouts/MainLayout2.vue'), 
        children: [
            // { path: '', component: () => import('../views/Home/Index.vue')},
            { path: 'home', name: 'home', component: () => import('../views/Home/Index.vue')},
            
            { path: 'organizations', name: 'organizations', component: () => import('../views/Organizations/Index.vue')},
            { path: 'organizations/create', name: 'organization-create', component: () => import('../views/Organizations/Create.vue')},
            { path: 'organizations/show/:id', name: 'organization-show', component: () => import('../views/Organizations/Show.vue')},
            { path: 'organizations/update/:id', name: 'organization-update', component: () => import('../views/Organizations/Update.vue')},

            { path: 'employees', name: 'employees', component: () => import('../views/Employees/Index.vue')},
            { path: 'employees/create/:id', name: 'employees-create', component: () => import('../views/Employees/Create.vue')},
            { path: 'employees/show/:id', name: 'employees-show', component: () => import('../views/Employees/Show.vue')},
            { path: 'employees/update/:id', name: 'employees-update', component: () => import('../views/Employees/Update.vue')},

            { path: 'roles', name: 'roles', component: () => import('../views/Roles/Index.vue')},
            { path: 'roles/show/:id', name: 'roles-show', component: () => import('../views/Roles/Show.vue')},
            { path: 'roles/update/:id', name: 'roles-update', component: () => import('../views/Roles/Update.vue')},

            { path: 'permissions', name: 'permissions', component: () => import('../views/Permissions/Index.vue')},
            { path: 'permissions/show/:id', name: 'permissions-show', component: () => import('../views/Permissions/Show.vue')},
            { path: 'permissions/update/:id', name: 'permissions-update', component: () => import('../views/Permissions/Update.vue')},

            { path: 'translations', name: 'translations', component: () => import('../views/Translations/Index.vue')},
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