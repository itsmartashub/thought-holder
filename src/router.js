import Vue from 'vue'
import Router from 'vue-router'

// import Tags from './views/Tags.vue'
import AllNotes from './components/AllNotes.vue'

import Signup from './components/auth/Signup.vue'
import Login from './components/auth/Login.vue'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'all-notes',
      component: AllNotes
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }

	// {
	// 	path: '/tags/:tag_slug_name',
	// 	name: 'tags',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ './views/Tags.vue')
    // },

	{ path: '/signup', name: "signup", component: Signup },
	{ path: '/login', name: "login", component: Login }
]

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
