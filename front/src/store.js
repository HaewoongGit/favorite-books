import { createStore } from "vuex";
import goods from "./assets/goods";
import axios from "axios";

const store = createStore({
    state() {
        return {
            goods,
            detail: {},
        };
    },

    mutations: {
        setGoods(state, goods) {
            state.goods = goods;
        },

        setDetail(state, detail) {
            state.detail = detail;
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

        cartList(context, payload) {
            axios.post(`http://localhost:3000/api/goods/${context.state.detail.goodsId}/cart`, { quantity: payload });
        },
    },
});

export default store;
