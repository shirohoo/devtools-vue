import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'blog',
        component: () => import('../views/Blog.vue')
    },
    {
        path: '/bookmarks',
        name: 'bookmark',
        component: () => import('../views/Bookmark.vue')
    },
    {
        path: '/dictionaries',
        name: 'dictionary',
        component: () => import('../views/Dictionary.vue')
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes
})

export default router
