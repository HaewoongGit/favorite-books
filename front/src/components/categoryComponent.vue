<template>
    <div class="wrap">
        <div class="form-group row mb-3">
            <label for="categorySelect" class="col-form-label w-25">카테고리</label>
            <select @change="goodsList($event.target.value)" class="form-select w-75" id="categorySelect">
                <option value="" selected>전체</option>
                <option value="drink">음료</option>
                <option value="food">음식</option>
            </select>
        </div>
        <productsComponent v-for="(good, i) in goods" :key="i" :good="good" :i="i" />
    </div>
</template>

<script>
import productsComponent from "./productsComponent.vue";
import { mapActions, mapState } from "vuex";
export default {
    components: { productsComponent },
    computed: {
        ...mapState(["goods"]),
    },

    methods: {
        ...mapActions(["goodsList"]),
    },

    beforeMount() {
        // console.log("카테고리", typeof this.category);
        this.goodsList(this.category);
    },
};
</script>

<style>
@import "../assets/mystyle.css";
</style>
