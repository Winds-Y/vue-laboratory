import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@views/About'
import Parent from '@components/test_vuex/Parent'
// import Login from '@components/Login'
import Register from '@components/Register'
import Navigation from '@components/Navigation'
import Page1 from '@views/nav_pages/Page1'
import Page2 from '@views/nav_pages/Page2'
import Page3 from '@views/nav_pages/Page3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/',
      component: Navigation,
      redirect: 'Page1',
      children: [
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
        },
        {
          path: '/Parent',
          name: 'parent',
          component: Parent
        }
      ],
      meta: {
        isLogin: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isLogin: false
      }
    }
  ]
})
