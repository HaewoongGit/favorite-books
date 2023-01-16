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
            console.log("띠로리~~~", detail);
            state.detail = detail;
        },
    },

    actions: {
        goodsList(context) {
            axios.get("http://localhost:3000/api/goods").then((res) => {
                context.commit("setGoods", res.data.goods);
            });
        },

        goodsDetail({ context }, data) {
            console.log("실행은 되냐?");
            console.log(data);
            axios.get(`http://localhost:3000/api/goods/${data}`).then((res) => {
                context.commit("setDetail", res.data.detail);
            });
        },
    },
});

export default store;
