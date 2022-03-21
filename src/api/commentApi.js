import axioClient from './axiosClient';

const commentApi = {

    get(id) {

    },

    addNewComment(data) {
        const token = axioClient.getToken();
        if (token) {
            axioClient.setHeaderAuth(token)
            return axioClient.post('/comments/news/post', data)
        }
    },

    update(data) {

    },
    remove(id) {

    }
};

export default commentApi;