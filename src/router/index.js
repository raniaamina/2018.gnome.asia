import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import apply from '@/components/apply'
import venue from '@/components/venue'
import registration from '@/components/registration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        Num: 0
      }
    },
    {
      path: '/apply',
      name: '/apply',
      component: apply,
      meta: {
        Num: 1
      }
    },
    {
      path: '/venue',
      name: 'venue',
      component: venue,
      meta: {
        Num: 1
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration,
      meta: {
        Num: 1
      }
    }
    
  ]
})