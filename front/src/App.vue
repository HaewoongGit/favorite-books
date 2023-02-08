<template>
    <!-- 상단바 코드 -->

    <nav class="navbar navbar-expand-lg bg-topBar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="./assets/shopping.png" width="30" height="30" /> 아는 사람만 아는 북스토어</a>
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
                        <a @click="$router.push('/cart')" class="nav-link active" aria-current="page"><font-awesome-icon icon="cart-shopping" /> 장바구니</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="loginStatus === false" class="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#logInModal"
                            ><font-awesome-icon icon="fa-solid fa-right-from-bracket" /> 로그인</a
                        >
                        <a v-if="loginStatus === true" class="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#logOutModal"
                            ><font-awesome-icon icon="fa-solid fa-right-from-bracket" /> 로그아웃</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <logInModal />
    <logoutModal />

    <router-view />
</template>

<script>
import { mapState } from "vuex";
import logoutModal from "./components/logoutModal.vue";
import logInModal from "./components/logInModal.vue";

export default {
    name: "App",
    components: { logoutModal, logInModal },
    computed: {
        ...mapState(["loginStatus"]),
    },
};
</script>

<style>
@import "./assets/mystyle.css";
</style>
