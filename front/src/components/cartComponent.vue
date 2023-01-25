<template>
    <div class="wrap">
        <div class="mb-3">
            <h4>
                <i class="fa fa-shopping-cart mr-1" aria-hidden="true"><font-awesome-icon icon="cart-shopping" /></i> 장바구니
            </h4>
        </div>
        <div v-for="(product, i) in cart" :key="i" style="margin-bottom: 100px; border-style: solid; border-width: 0.5px; padding: 10px">
            <div id="goodsList">
                <div class="card mb-2">
                    <div class="row no-gutters">
                        <img :src="product.goods.thumbnailUrl" class="card-img-top col-4" alt="..." style="width: 220px; height: 250px" />
                        <div class="col-8 d-flex align-items-center">
                            <div class="card-body py-1">
                                <div class="card-title row mt-2">
                                    <p class="font-weight-bold col" style="display: inline">{{ product.goods.name }}</p>
                                    <span class="card-price col text-right">${{ product.goods.price }}</span>
                                </div>
                                <div class="card-title row mt-2">
                                    <p class="font-weight-bold col" style="display: inline">장바구니에 담긴 수량</p>
                                    <span class="card-price col text-right">{{ product.quantity }}</span>
                                </div>

                                <div class="row mt-5">
                                    <div class="col-6">
                                        <button
                                            @click="
                                                cartChange(cartChangeValue);
                                                valueLog();
                                            "
                                            type="button"
                                            class="btn btn-outline-primary w-100"
                                        >
                                            수량 변경
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <select
                                            @change="cartChangeValue[i] = { quantity: $event.target.value, goodsId: i + 1 }"
                                            class="form-select"
                                            id="numberSelect"
                                        >
                                            <option selected value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card container" style="margin: 0px 3px 0px 3px">
                    <div class="row mt-1 mb-1">
                        <div class="col-5 align-self-center">총 상품금액</div>
                        <div class="col-7" id="priceSum">${{ product.quantity * product.goods.price }}</div>
                    </div>

                    <button type="button" class="btn btn-primary w-100">구매</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            cartChangeValue: [],
        };
    },
    computed: {
        ...mapState(["cart"]),
        ...mapActions(["cartList"]),
    },
    methods: {
        ...mapActions(["cartChange"]),
        valueLog() {
            console.log("cartChangeValue 값: ", this.cartChangeValue);
        },
    },
    beforeMount() {
        this.cartList;
    },
};
</script>

<style></style>
