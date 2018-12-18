import Vue from 'vue'
import Router from 'vue-router'
import common_nav from '@/components/common_nav'
import html from '@/page/html'
import js from '@/page/js'
import css from '@/page/css'
import img from '@/page/img'

Vue.use(Router);

export default new Router({
  routes: [
        {
          path:'/',
          component:common_nav,
          children:[
            {
              path:'/html',
              component:html
            },
            {
              path:'/js',
              component:js
            },
            {
              path:'/css',
              component:css
            },
            {
              path:'/img',
              component:img
            }
          ]
        },

  ]
})
