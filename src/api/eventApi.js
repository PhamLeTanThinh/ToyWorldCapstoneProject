import axioClient from './axiosClient';

const eventApi = {

    getHighLight(params) {
        const url = '/contest/highlight';
        return axioClient.get(url, {params: params});
    },

    add(data) {
        
    },

    update(data) {

    },
    remove(id) {

    }
};

export default eventApi;