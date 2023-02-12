import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            goods: [],
            detail: {},
            cart: [],
            token: "",
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
        },

        setToken(state, token) {
            state.token = token
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

        signUp(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:3000/api/users", payload).then((res) => {
                    if (res.status === 201) {
                        resolve(res.data)
                    }
                }).catch(error => {
                    if (error.response.status === 406) {
                        alert(error.response.data)
                    } else {
                        alert("에러 발생. ", error.response.data)
                    }
                    reject(error);
                })
            })
        },

        signIn(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:3000/api/auth", payload).then(res => {
                    console.log("토큰 출력!!", res.data.token);
                    context.commit("setToken", res.data.token)
                    console.log("토큰 출력2", this.state.token);

                    resolve("success")
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
});

export default store;