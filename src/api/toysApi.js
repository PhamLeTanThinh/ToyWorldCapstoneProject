import axioClient from './axiosClient';

const toysApi = {

    getAll(params) {
        const url = '/toys';
        // const toysList =  axioClient.get(url, {params: params});
        // return {
        //     data: toysList,
        //     pageNumber: '1',
        //     pageSize: '9',
        //     count: ''
        // }
        return axioClient.get(url, {params: params});
    },

    getToyByTypeName(typeName){
        const url = `/toys/type/${typeName}`;
        return axioClient.get(url);
    },

    get(id){
        const url = `/toys/details/${id}`;
        return axioClient.get(url);
    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default toysApi;