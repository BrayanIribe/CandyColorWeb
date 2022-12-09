import http from './http';

export default {
    async dashboard() {
        return http.GetSingleton().get('/reportes/dashboard');
    },
    async generarReporte(id) {
        return http.GetSingleton().get('/reportes/' + id);
    }
};