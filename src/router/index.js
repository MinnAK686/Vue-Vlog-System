import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import PostTagsView from '../views/PostTagsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import CreatePostView from '../views/CreatePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/post-detail/:id',
    name: 'post-detail',
    component: PostDetailView,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'tags',
    component: PostTagsView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
