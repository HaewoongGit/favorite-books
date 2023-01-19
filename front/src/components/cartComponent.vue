<template>
    <div class="wrap">
        <div class="mb-3">
            <h4><i class="fa fa-shopping-cart mr-1" aria-hidden="true"></i>장바구니</h4>
        </div>
        <div id="goodsList">
            <div class="card mb-2" onclick="location.href='#'">
                <div class="row no-gutters">
                    <div class="col-4" style="background: #868e96">
                        <img src="https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg" class="card-img-top h-100" alt="..." />
                    </div>
                    <div class="col-8">
                        <div class="card-body py-1">
                            <div class="card-title row mt-2">
                                <p class="font-weight-bold col" style="display: inline">상품 1</p>
                                <span class="card-price col text-right">$6.20</span>
                            </div>
                            <div class="form-group row mr-0">
                                <div class="col-7 pr-2">
                                    <button class="btn btn-outline-sparta btn-block">삭제</button>
                                </div>

                                <select class="custom-select col-5" id="numberSelect">
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
        <hr />

        <div class="row mb-3">
            <div class="col-5">총 상품금액</div>
            <div class="col-7 text-right" id="priceSum">$6.20</div>
        </div>
        <button type="button" class="btn btn-sparta btn-block" onclick="order()">구매</button>
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
        console.log("카트 출력 ", this.cart);
    },
};
</script>

<style></style>
