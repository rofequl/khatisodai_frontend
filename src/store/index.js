import Vue from 'vue'
import Vuex from 'vuex'

import category from "@/store/module/category";
import subcategory from "@/store/module/subcategory";
import subsubcategory from "@/store/module/subsubcategory";
import home from "@/store/module/home";
import product from "@/store/module/product";
import general from "@/store/module/general";
import page from "@/store/module/page";
import attribute from "@/store/module/attribute";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        category,
        subcategory,
        subsubcategory,
        home,
        product,
        general,
        page,
        attribute
    }
})
