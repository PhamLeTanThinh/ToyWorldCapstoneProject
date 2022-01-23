import axioClient from './axiosClient';

const groupApi = {

    getAllGroup(params) {
        const url = '/groups/';
        return axioClient.get(url, {params: params});
    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default groupApi;