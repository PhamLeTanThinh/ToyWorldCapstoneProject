import axioClient from './axiosClient';

const postApi = {

    getAll(id) {
        const url = `/posts/group/${id}`;
        return axioClient.get(url);
    },

    // getToyByTypeName(typeName){
    //     const url = `/toys/type/${typeName}`;
    //     return axioClient.get(url);
    // },

    // get(id){
    //     const url = `/toys/details/${id}`;
    //     return axioClient.get(url);
    // },

    get(id){
        const url = `/posts/details/${id}`;
        return axioClient.get(url);
    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default postApi;