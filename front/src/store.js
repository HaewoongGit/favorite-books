import { createStore } from "vuex";
import axios from "axios";
import router from '@/router'

const store = createStore({
    state() {
        return {
            goods: [],
            detail: {},
            cart: [],
            token: "",
            totalPrice: 0,
            shoppingList: [],
            orderHistory: []
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

        setTotalPrice(state, totalPrice) {
            state.totalPrice = totalPrice
        },

        setToken(state, token) {
            state.token = token
        },
        setShoppingList(state, shoppingList) {
            state.shoppingList = shoppingList
        },
        setOrderHistory(state, orderHistory) {
            state.orderHistory = orderHistory
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
            axios.post(`http://localhost:3000/api/cart/${context.state.detail.goodsId}`, { quantity: payload }, { headers: { token: this.state.token } }).catch(err => { alert("로그인 해주세요.", err) });
        },

        cartList(context) {
            axios.get(`http://localhost:3000/api/cart`, { headers: { token: this.state.token } }).then((res) => {
                context.commit("setCart", res.data);
            }).catch(err => {
                alert(err.response.data.errormessage)
                router.push("/")
            });
        },

        cartChange(context, payload) {
            axios.patch("http://localhost:3000/api/cart/update", payload, { headers: { token: this.state.token } })
        },

        cartDelete(context, payload) {
            axios.delete(`http://localhost:3000/api/cart/delete/${payload}`, { headers: { token: this.state.token } })
        },

        signUp(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:3000/api/users", payload).then((res) => {
                    if (res.status === 201) {
                        resolve(res.data)
                    }
                }).catch(error => {
                    console.log(error);
                    reject(error);
                })
            })
        },

        signIn(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:3000/api/auth", payload).then(res => {
                    context.commit("setToken", res.data.token)

                    resolve("success")
                }).catch(error => {
                    reject(error)
                })
            })
        },

        shoppingListPost(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost:3000/api/buy", payload, { headers: { token: this.state.token } }).then(() => {
                    resolve("success")
                }).catch(error => {
                    reject(error)
                })
            })
        },

        orderHistoryGet(context) {
            return new Promise((resolve, reject) => {
                axios.get("http://localhost:3000/api/buy", { headers: { token: this.state.token } }).then(res => {
                    context.commit("setOrderHistory", res.data)
                    resolve("success")
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
});

export default store;