import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "",
            component: Home,
        },
        {
            path: '/home',
            name: "home",
            component: Home,
        },
        {
            path: '/about',
            name: "about",
            component: About,
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         return { selector: to.hash, behavior: 'smooth' };
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // }
});

export { router };

