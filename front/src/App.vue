<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-sparta justify-content-end">
        <a class="navbar-brand" href="/goods">
            <img src="./assets/logo_big_tr.png" width="30" height="30" class="d-inline-block align-top" alt="" /> 나의 쇼핑몰
        </a>
        <button
            class="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse flex-grow-0 ml-auto" id="navbarSupportedContent" style="">
            <ul class="navbar-nav mr-auto text-right">
                <li class="nav-item" id="link-cart">
                    <a class="nav-link" href="/cart"> 장바구니 </a>
                </li>
                <li class="nav-item" id="link-logout">
                    <a class="nav-link" data-toggle="modal" data-target="#signOutModal" style="cursor: pointer"> 로그아웃 </a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="wrap">
        <div>
            <div class="form-group row mr-0">
                <label for="categorySelect" class="col-4 col-form-label">카테고리</label>
                <select class="form-control col-8" id="categorySelect">
                    <option value="" selected>전체</option>
                    <option value="drink">음료</option>
                    <option value="food">음식</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
@import "./assets/mystyle.css";
</style>
