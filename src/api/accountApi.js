
import axioClient from './axiosClient';

const accountApi = {
    register(data) {
        //set duong` dan~
        const url = '/auth/local/register';
        return axioClient.post(url, data);
    },
    login(data) {
        //set duong` dan~
        const url = '/accounts/login_by_system_account';
        return axioClient.post(url, data);
    },

    loginByGoogle(data) {
        const url = '/accounts/login_by_email/?firebaseToken=' + data;
        return axioClient.post(url, data);
    },

    getDetailAccountById(id) {
        const url = `/accounts/detail/${id}`;
        return axioClient.get(url);
    }
};

export default accountApi;