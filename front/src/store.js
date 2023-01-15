import { createStore } from "vuex";
import goods from "./assets/goods";

const store = createStore({
    state() {
        return {
            goods,
            modalOpen: false,
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
    },
});

export default store;
