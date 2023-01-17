import { createStore } from "vuex";
import goods from "./assets/goods";
import axios from "axios";

const store = createStore({
    state() {
        return {
            goods,
            modalOpen: false,
            detail: {},
        };
    },

    mutations: {
        setModalOpen(state) {
            state.modalOpen = true;
            console.log("modal이 오픈됨", state.modalOpen);
        },

        setModalClose(state) {
            state.modalOpen = false;
        },

        setGoods(state, goods) {
            state.goods = goods;
        },

        setDetail(state, detail) {
            state.detail = detail;
        },
    },

    actions: {
        goodsList(context, payload) {
            console.log("페이로드", payload);
            axios.get(`http://localhost:3000/api/goods${payload ? "?category=" + payload : ""}`).then((res) => {
                // axios.get(`http://localhost:3000/api/goods`).then((res) => {
                console.log("받아온 상품 데이터", res.data.goods);
                context.commit("setGoods", res.data.goods);
            });
        },

        goodsDetail(context, payload) {
            console.log("디테일 페이로드", payload);
            axios.get(`http://localhost:3000/api/goods/${payload}`).then((res) => {
                context.commit("setDetail", res.data.detail);
            });
        },
    },
});

export default store;
