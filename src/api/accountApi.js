
import axioClient from './axiosClient';

const accountApi = {
    register(data) {
        //set duong` dan~
        const url = '/auth/local/register';
        return axioClient.post(url, data);
    },
    login(data) {
        //set duong` dan~
        const url = '/auth/local';
        return axioClient.post(url, data);
    },

    loginByGoogle(data) {
        const url = '/accounts/loginbyemail/?firebaseToken='+data;
        return axioClient.post(url, data);
    }
};

export default accountApi;