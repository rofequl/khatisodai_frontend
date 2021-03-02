import ApiService from "@/core/services/api.service";

export default {
    state: {
        featured: [],
    },

    getters: {
        featured: state => state.featured,
    },

    actions: {
        FEATURED_PRODUCT({commit}) {
            return new Promise((resolve, reject) => {
                ApiService.get("featured-product")
                    .then(({data}) => {
                        commit('SET_FEATURED_PRODUCT', data);
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
        },
    },

    mutations: {
        SET_FEATURED_PRODUCT: (state, data) => {
            state.featured = data;
        }
    }

}
