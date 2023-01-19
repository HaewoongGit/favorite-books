<template>
    <div class="wrap">
        <div class="mb-3">
            <h4>
                <i class="fa fa-shopping-cart mr-1" aria-hidden="true"><font-awesome-icon icon="cart-shopping" /></i> 장바구니
            </h4>
        </div>
        <div v-for="(product, i) in cart" :key="i">
            <div id="goodsList">
                <div class="card mb-2" onclick="location.href='#'">
                    <div class="row no-gutters">
                        <div class="col-4" style="background: #868e96">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg"
                                class="card-img-top h-100"
                                alt="..."
                            />
                        </div>
                        <div class="col-8">
                            <div class="card-body py-1">
                                <div class="card-title row mt-2">
                                    <p class="font-weight-bold col" style="display: inline">{{ product.name }}</p>
                                    <span class="card-price col text-right">${{ product.price }}</span>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-primary w-100">Primary</button>
                                    </div>
                                    <div class="col-6">
                                        <select class="form-select" id="numberSelect">
                                            <option selected value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div class="row mb-3">
                <div class="col-5">총 상품금액</div>
                <div class="col-7 text-right" id="priceSum">$6.20</div>
            </div>
            <button type="button" class="btn btn-primary w-100">구매</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState(["cart"]),
        ...mapActions(["cartList"]),
    },
    beforeMount() {
        this.cartList;
    },
};
</script>

<style></style>
