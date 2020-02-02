
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'inicial',component: () => import('pages/Index.vue') },
      { path: 'detalhes', name: 'detalhe',props: true, component: () => import('pages/detalhes.vue') },
    ]
  },
  {
    path: '/painel',
    component: () => import('layouts/painel.vue'),
    children: [
      { path: 'login', name: 'login',props: true, component: () => import('pages/login.vue') },
      { path: 'cadastrar', name: 'cadastrase',props: true, component: () => import('pages/cadastrar.vue') }
    ]
  },
  {
    path: '/logado',
    component: () => import('layouts/logados.vue'),
    children: [
      { path: 'logad', name: 'logado',props: true, component: () => import('pages/logado.vue') }
    ]
  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
