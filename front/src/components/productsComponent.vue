<template>
    <div id="goodsList" class="mb-5">
        <div class="card mb-2" onclick="location.href='#'">
            <div class="row no-gutters">
                <div class="col-sm-5" style="background: #868e96">
                    <img :src="good.thumbnailUrl" class="card-img-top h-100" alt="..." />
                </div>
                <div class="col-sm-7 d-flex">
                    <div class="card-body flex-fill">
                        <div class="card-title mb-auto">
                            <h5 style="display: inline">{{ good.name }}</h5>
                            <span class="card-price ml-2">${{ good.price }}</span>
                        </div>
                        <span class="badge badge-secondary">{{ good.category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        good: Object,
    },
};
</script>

<style></style>
