<template>
  <div
    @click="
      goodsDetail(this.good.goodsId);
      $router.push(`/detail/${good.goodsId}`);
    "
    id="goodsList"
    class="mb-3"
  >
    <div class="card mb-1" onclick="location.href='#'">
      <div class="row g-0">
        <div class="col-md-4" style="background: #868e96">
          <img id="goodsUrl" :src="good.thumbnailUrl" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title">
              <h5>{{ good.name }}</h5>
              <span class="card-price ml-2">${{ good.price }}</span>
            </div>
            <span class="badge text-bg-secondary">{{ good.category }}</span>
            <p class="mt-2">{{ good.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    good: Object,
    i: Number,
  },
  methods: {
    ...mapActions(["goodsDetail"]),
  },
};
</script>

<style></style>
