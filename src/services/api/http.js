import axios from 'axios'
import store from './../../store';

let http = null;

export default {
    /**
     * 
     * @returns {import('axios').AxiosInstance}
     */
    GetSingleton() {
        if (http !== null) {
            return http;
        }
        // Si no existe una instancia HTTP, entonces crear una nueva.
        http = axios.create({
            baseURL: 'http://localhost:3030',
            timeout: 2000,
            validateStatus: false,
        });

        // Interceptar todos los requests.
        http.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            // Inyectar token del usuario si se encuentra almacenado.
            if (typeof token === 'string' && token.length > 0)
                config.headers['x-access-token'] = token;
            store.commit('setLoading', true);
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        http.interceptors.response.use(function (response) {
            store.commit('setLoading', false);
            return response;
        }, function (error) {
            store.commit('setLoading', false);
            return Promise.reject(error);
        });

        return http;
    }

}