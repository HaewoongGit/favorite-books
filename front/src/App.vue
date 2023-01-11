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
