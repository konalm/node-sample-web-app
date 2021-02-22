import axios from 'axios';

axios.interceptors.response.use(() => {

});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};