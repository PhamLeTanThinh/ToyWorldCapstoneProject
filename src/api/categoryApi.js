import axioClient from './axiosClient';

const categorysApi = {

    getAll(params) {
        const url = '/types/type_to_conbobox';

        return axioClient.get(url, {params: params});
    },

    get(id) {

    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default categorysApi;