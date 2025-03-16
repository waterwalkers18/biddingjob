const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: "form", component: () => import("pages/FormPage.vue") }
    ]
  },
  {
    path: '/auth',
    component: () => import('src/layouts/PageHeader.vue'),
    children: [
      {path: 'login', component: () => import('src/pages/UserLogin.vue')},
      {path: 'register', component: () => import('src/pages/Userregistration.vue')},
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
