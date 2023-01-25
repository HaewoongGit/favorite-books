import { createStore } from "vuex";
import goods from "./assets/goods";
import axios from "axios";

const store = createStore({
    state() {
        return {
            goods,
            detail: {},
            cart: [],
        };
    },

    mutations: {
        setGoods(state, goods) {
            state.goods = goods;
        },

        setDetail(state, detail) {
            state.detail = detail;
        },

        setCart(state, cart) {
            state.cart = cart;
        },
    },

    actions: {
        goodsList(context, payload) {
            axios.get(`http://localhost:3000/api/goods${payload ? "?category=" + payload : ""}`).then((res) => {
                context.commit("setGoods", res.data.goods);
            });
        },

        goodsDetail(context, payload) {
            axios.get(`http://localhost:3000/api/goods/${payload}`).then((res) => {
                context.commit("setDetail", res.data.detail);
            });
        },

        cartRegister(context, payload) {
            axios.post(`http://localhost:3000/api/goods/${context.state.detail.goodsId}/cart`, { quantity: payload });
        },

        cartList(context) {
            axios.get(`http://localhost:3000/api/cart`).then((res) => {
                context.commit("setCart", res.data.cart);
            });
        },

        cartChange(context, payload) {
            console.log(context);
            console.log("payload 출력", payload);
            axios.patch(`http://localhost:3000/api/cart/update${payload ? '?cartChange=' + payload : ''}`)
        }
    },
});

export default store;
