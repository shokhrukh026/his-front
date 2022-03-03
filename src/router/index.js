import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../layouts/MainLayout.vue'), 
        children: [
            // { path: '', component: () => import('../views/Home/Index.vue')},
            { path: 'home', name: 'home', component: () => import('../views/Home/Index.vue')},
            
            { path: 'organizations', name: 'organizations', props: true, component: () => import('../views/Organizations/Index.vue')},
            { path: 'organizations/create', name: 'organizations-create', props: true, component: () => import('../views/Organizations/Create.vue')},
            { path: 'organizations/show/:id', name: 'organizations-show', props: true, component: () => import('../views/Organizations/Show.vue')},
            { path: 'organizations/update/:id', name: 'organizations-update', props: true, component: () => import('../views/Organizations/Update.vue')},

            { path: 'employees', name: 'employees', props: true, component: () => import('../views/Employees/Index.vue')},
            { path: 'employees/create/:id', name: 'employees-create', props: true, component: () => import('../views/Employees/Create.vue')},
            { path: 'employees/show/:id', name: 'employees-show', props: true, component: () => import('../views/Employees/Show.vue')},
            { path: 'employees/update/:id', name: 'employees-update', props: true, component: () => import('../views/Employees/Update.vue')},

            { path: 'roles', name: 'roles', props: true, component: () => import('../views/Roles/Index.vue')},
            { path: 'roles/show/:id', name: 'roles-show', props: true, component: () => import('../views/Roles/Show.vue')},
            { path: 'roles/update/:id', name: 'roles-update', component: () => import('../views/Roles/Update.vue')},

            { path: 'permissions', name: 'permissions', props: true, component: () => import('../views/Permissions/Index.vue')},
            { path: 'permissions/show/:id', name: 'permissions-show', props: true, component: () => import('../views/Permissions/Show.vue')},
            { path: 'permissions/update/:id', name: 'permissions-update', props: true, component: () => import('../views/Permissions/Update.vue')},

            { path: 'translations', name: 'translations', props: true, component: () => import('../views/Translations/Index.vue')},
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