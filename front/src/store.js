import { createStore } from 'vuex'
import goods from './assets/goods'

const store = createStore({
    state() {
        return {
            goods
        }
    },

    mutations: {

    }
})

export default store