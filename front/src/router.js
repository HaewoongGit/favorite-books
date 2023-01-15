import { createWebHistory, createRouter } from "vue-router";
import categoryComponent from "./components/categoryComponent";
import detailComponent from "./components/detailComponent";

const routes = [
    {
        path: "/",
        component: categoryComponent,
    },
    {
        path: "/detail/:id",
        component: detailComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
