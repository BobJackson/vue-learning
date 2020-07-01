import axios from 'axios';
import * as type from './mutation-types';

const state = {
    productItems: []
};

const mutations = {
    [type.UPDATE_PRODUCT_ITEMS] (state,payload){
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({commit}){
        axios.get('/api/products').then((response) =>{
            commit(type.UPDATE_PRODUCT_ITEMS, response.data)
        });
    }
};

const getters = {
    productItems: state => state.productItems
};

const productModule = {
    state,
    mutations,
    actions,
    getters
};

export default productModule;