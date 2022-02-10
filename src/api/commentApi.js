import axioClient from './axiosClient';

const commentApi = {

    get(id) {

    },

    addNewComment(data) {
        const url = '/comments/new';
        return axioClient.post(url, data);
    },

    update(data) {

    },
    remove(id) {

    }
};

export default commentApi;