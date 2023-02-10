<template>
    <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">회원가입</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group d-flex mb-3">
                            <label for="nickname" class="mr-3" style="width: 25%">닉네임</label>
                            <input type="text" class="form-control" id="nickname" placeholder="닉네임" style="width: 75%" />
                        </div>
                        <div class="form-group d-flex mb-3">
                            <label for="email" class="mr-3" style="width: 25%">이메일</label>
                            <input type="email" class="form-control" id="email" placeholder="email@email.com" style="width: 75%" />
                        </div>
                        <div class="form-group d-flex mb-3">
                            <label for="password" class="mr-3" style="width: 25%">비밀번호</label>
                            <input type="password" class="form-control" id="password" placeholder="영문과 숫자로 6자리 이상" style="width: 75%" />
                        </div>
                        <div class="form-group d-flex mb-3">
                            <label for="password2" class="mr-3" style="width: 25%">비밀번호 확인</label>
                            <input type="password" class="form-control" id="password2" placeholder="비밀번호 재입력" style="width: 75%" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                    <button type="button" class="btn btn-primary">회원가입</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
