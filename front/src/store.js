import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            goods: [],
            detail: {},
            cart: [],
            loginStatus: false,
            totalPrice: 0
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

        cartSum(state, totalPrice) {
            state.totalPrice = totalPrice
        }
    },

    actions: {
        goodsList(context, payload) {
            axios.get(`http://localhost:3000/api/goods${payload ? "?category=" + payload : ""}`).then((res) => {
                context.commit("setGoods", res.data.goods);
            });
        },

        goodsDetail(context, payload) {
            axios.get(`http://localhost:3000/api/goods/${payload}`).then((res) => {
                context.commit("setDetail", res.data);
            });
        },

        cartRegister(context, payload) {
            axios.post(`http://localhost:3000/api/cart/${context.state.detail.goodsId}`, { quantity: payload });
        },

        cartList(context) {
            axios.get(`http://localhost:3000/api/cart`).then((res) => {
                context.commit("setCart", res.data);
            });
        },

        cartChange(context, payload) {
            axios.patch("http://localhost:3000/api/cart/update", payload)
        },

        cartDelete(context, payload) {
            axios.delete(`http://localhost:3000/api/cart/delete/${payload}`)
        },
    },
});

export default store;