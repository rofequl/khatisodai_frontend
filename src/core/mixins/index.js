import Vue from 'vue'
import {api_base_url} from "@/core/config/app";

Vue.mixin({
    methods: {
        showImage(e) {
            if (e) return api_base_url + e;
        },
    }
})
