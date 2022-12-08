import http from './http';

export default {
    async login(usuario, password) {
        return http.GetSingleton().post('/auth/login', { usuario, password });
    },
    async checkin() {
        return http.GetSingleton().get('/auth/checkin');
    }
};