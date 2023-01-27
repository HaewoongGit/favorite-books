import { createWebHistory, createRouter } from "vue-router";
import categoryComponent from "./components/categoryComponent";
import detailComponent from "./components/detailComponent";
import cartComponent from "./components/cartComponent";
import buyComponent from "./components/buyComponent"

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
    },
    {
        path: "/buy",
        component: buyComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
