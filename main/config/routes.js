export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      // 首页
      { path: '/', component: '../pages/index' },
      {  path: '/app-demo',
        microApp: 'app-demo'
      },
    ]
  },
]