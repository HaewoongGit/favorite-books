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
            console.log("state안의 디테일은 이렇게 바뀌었다.", state.detail);
        },
    },

    actions: {
        goodsList(context) {
            axios.get("http://localhost:3000/api/goods").then((res) => {
                context.commit("setGoods", res.data.goods);
            });
        },

        goodsDetail(context, payload) {
            axios.get(`http://localhost:3000/api/goods/${payload}`).then((res) => {
                console.log("store.js 서버에서 받아온 데이터", res.data.detail);
                console.log("store.js 서버에서 받아온 데이터의 타입", typeof (res.data.detail));
                context.commit("setDetail", res.data.detail);
            });
        },
    },
});

export default store;
