<template>
    <!-- 상단바 코드 -->
    <nav class="navbar navbar-expand-lg bg-topBar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="./assets/shopping.png" width="30" height="30" /> 아는 사람만 아는 쇼핑몰</a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">장바구니</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">로그아웃</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="wrap">
        <div class="form-group row mr-0">
            <label for="categorySelect" class="col-4 col-form-label">카테고리</label>
            <select class="form-control col-8" id="categorySelect">
                <option value="" selected>전체</option>
                <option value="drink">음료</option>
                <option value="food">음식</option>
            </select>
        </div>
        <productsComponent v-for="(good, i) in goods" :key="i" :good="good" />
    </div>
</template>

<script>
import productsComponent from "./components/productsComponent.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        productsComponent,
    },
    computed: {
        ...mapState(["goods"]),
    },
};
</script>

<style>
@import "./assets/mystyle.css";
</style>
