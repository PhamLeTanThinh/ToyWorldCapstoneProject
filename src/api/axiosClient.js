import axios from "axios"

// const axioClient = axios.create({
//   // baseURL: 'https://api.ezfrontend.com/',
//   baseURL: 'https://tws-system-release.herokuapp.com/api/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

axios.defaults.baseURL = 'https://tws-system-release.herokuapp.com/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

export const axioClient = {
    get(url, slug = '') {
        return axios.get(`${url}/${slug}`).catch(error => console.log(error))
    },
    post(url, params, config) {
        return axios.post(`${url}`, params, config)
    },
    put(url, params, config) {
        return axios.put(`${url}`, params, config)
    },
    saveToken(token, expired) {
        window.localStorage.setItem('token', JSON.stringify(token))
    },
    getToken() {
        if (typeof window === 'undefined') {
            return null
        }
        return JSON.parse(window.localStorage.getItem('token'))
    },
    setHeaderAuth(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    clearToken() {
        
    }
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response.data;
},

function (error) {

    // const { config, status, data } = error.response;

    // const URLs = ['/auth/local/register', '/auth/local']

    // if (URLs.includes(config.url) && status === 400) {
    //   const errorList = data.data || [];
    //   const firstError = errorList.length > 0 ? errorList[0] : {};
    //   const messageList = firstError.messages || [];
    //   const firstMessage = messageList.length > 0 ? messageList[0] : {};

    //   throw new Error(firstMessage.message)
    // }
    return Promise.reject(error);
});

export default axioClient;