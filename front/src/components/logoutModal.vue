<template>
    <div class="modal fade" id="signOutModal" tabindex="-1" aria-labelledby="signOutModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="signOutModalLabel">로그아웃</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>정말 로그아웃하시겠습니까?</p>
                </div>
                <div class="modal-footer">
                    <button @click="setModalClose" type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                    <button type="button" class="btn btn-primary">로그아웃하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    methods: {
        ...mapMutations(["setModalClose"]),
    },
};
</script>

<style></style>
