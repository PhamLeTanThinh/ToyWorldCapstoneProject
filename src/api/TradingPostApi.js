import axioClient from './axiosClient';

const tradingPostApi = {

    getAll(id) {
        const token = axioClient.getToken();
        if (token) {
            axioClient.setHeaderAuth(token)
            return axioClient.get('/trading_posts/group', id)
        }
    },

    getAllByAccount(id) {
        const url = `posts/account/${id}`;
        return axioClient.get(url);
    },


    get(id){
        const url = `/posts/details/${id}`;
        return axioClient.get(url);
    },

    reactPost(id){
        const url = `/posts/reacts/${id}`;
        return axioClient.put(url);
    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default tradingPostApi;