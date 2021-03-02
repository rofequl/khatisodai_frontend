import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: "/",
            component: () => import("@/layout/Frontend"),
            children: [
                {
                    meta: {title: 'Dashboard'},
                    path: "/",
                    name: "dashboard",
                    component: () => import("@/pages/Home")
                },
                {
                    meta: {title: 'All Categories List'},
                    path: "/categories",
                    name: "All Categories",
                    component: () => import("@/pages/Category"),
                },
                {
                    meta: {title: 'Flash Deal'},
                    path: "/deal/:slug",
                    name: "Flash Deal",
                    component: () => import("@/pages/Deal")
                },
                {
                    meta: {title: 'Categories'},
                    path: "/category/:cat?/:sub?/:subcat?",
                    name: "category",
                    component: () => import("@/pages/ProductList")
                },
                {
                    meta: {title: 'Categories'},
                    path: "/category/:cat/:sub",
                    name: "category-sub",
                    component: () => import("@/pages/ProductList")
                },
                {
                    meta: {title: 'Terms and Condition'},
                    path: "/terms-conditions",
                    name: "terms-conditions",
                    component: () => import("@/pages/footer/Terms"),
                },
                {
                    meta: {title: 'Privacy Policy'},
                    path: "/privacy-policy",
                    name: "privacy-policy",
                    component: () => import("@/pages/footer/Privacy"),
                },
                {
                    meta: {title: 'About Us'},
                    path: "/about-us",
                    name: "about-us",
                    component: () => import("@/pages/footer/About"),
                },
            ]
        },
        {
            path: "/error",
            component: () => import("@/layout/Frontend"),
            children: [
                {
                    meta: {title: 'Error 500'},
                    path: "/error",
                    name: "error-500",
                    component: () => import("@/pages/error/Error-500"),
                }
            ]
        },
        {
            path: "*",
            component: () => import("@/layout/Frontend"),
            children: [
                {
                    meta: {title: 'Error 404'},
                    path: "*",
                    name: "error-404",
                    component: () => import("@/pages/error/Error-404"),
                }
            ]
        },
    ]
}
