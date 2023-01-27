<template>
    <div class="wrap">
        <form class="row">
            <h3 class="mb-3"><font-awesome-icon icon="truck-fast" /> <b>배송지 입력</b></h3>
            <div class="col-12 mb-3">
                <label for="inputAddress" class="form-label">받는 사람</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="홍길동" />
            </div>
            <div class="col-12 mb-3">
                <label for="inputAddress2" class="form-label">연락처</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="010-xxx-xxxx" />
            </div>
            <div class="col-12 mb-3">
                <label for="inputAddress2" class="form-label">주소</label>
                <input type="text" class="form-control mb-2" id="inputAddress2" placeholder="도로명, 건물명, 번지 검색" />
                <input type="text" class="form-control" id="inputAddress2" placeholder="상세주소" />
            </div>
            <div class="d-grid gap-2 mb-3">
                <button type="submit" class="btn btn-primary">$ {{ totalPrice }} 결제</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["totalPrice"]),
    },
};
</script>

<style></style>
