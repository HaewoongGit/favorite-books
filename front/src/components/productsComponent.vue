<template>
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
        <div id="goodsList" class="mb-5">
            <div>
                <div class="card mb-2" onclick="location.href='#'">
                    <div class="row no-gutters">
                        <div class="col-sm-5" style="background: #868e96">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg"
                                class="card-img-top h-100"
                                alt="..."
                            />
                        </div>
                        <div class="col-sm-7 d-flex">
                            <div class="card-body flex-fill">
                                <div class="card-title mb-auto">
                                    <h5 style="display: inline">상품 1</h5>
                                    <span class="card-price ml-2">$6.20</span>
                                </div>
                                <span class="badge badge-secondary">drink</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
