<template>
    <!-- 상단바 코드 -->

    <nav class="navbar navbar-expand-lg bg-topBar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="./assets/shopping.png" width="30" height="30" /> 아는 사람만 아는 쇼핑몰</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a @click="$router.push('/cart')" class="nav-link active" aria-current="page"
                            ><font-awesome-icon icon="cart-shopping" /> 장바구니</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#signOutModal"
                            ><font-awesome-icon icon="fa-solid fa-right-from-bracket" /> 로그아웃</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <logoutModal />

    <router-view />
</template>

<script>
import logoutModal from "./components/logoutModal.vue";

export default {
    name: "App",
    components: { logoutModal },
};
</script>

<style>
@import "./assets/mystyle.css";
</style>
