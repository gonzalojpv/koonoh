export const state = () => ({
    products: [],
})

export const mutations = {
    SET_PRODUCTS(state, newProducts) {
        state.products = newProducts
    },
}

export const getters = {
    getAllProducts(state) {
        return state.products
    },
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    async fetchAllProducts({ commit }, { name, bran }) {
        // eslint-disable-next-line no-undef
        blockspring.runParsed(
            '2182395e971ffc23cc67e711f077d1bf',
            { name, bran },
            { api_key: 'br_169014_e1dc2a9c1aa386609961eae7619f55da57abc038' },
            function (res) {
                console.log(res.params)
                commit('SET_PRODUCTS', res.params.products)
            }
        )
    },
}
