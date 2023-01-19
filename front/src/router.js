import { createWebHistory, createRouter } from "vue-router";
import categoryComponent from "./components/categoryComponent";
import detailComponent from "./components/detailComponent";
import cartComponent from "./components/cartComponent"

const routes = [
    {
        path: "/",
        component: categoryComponent,
    },
    {
        path: "/detail/:id",
        component: detailComponent,
    },
    {
        path: "/cart",
        component: cartComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
