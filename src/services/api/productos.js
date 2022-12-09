import http from './http';

export default {
    async fetch() {
        return http.GetSingleton().get('/productos');
    },
    async fetchById(id) {
        return http.GetSingleton().get('/productos/' + id);
    },
    async fetchByCodigo(codigo) {
        return http.GetSingleton().get('/productos/codigo/' + codigo);
    },
    async create(form) {
        return http.GetSingleton().post('/productos', form)
    },
    async update(id, form) {
        return http.GetSingleton().put('/productos/' + id, form)
    },
    async delete(id) {
        return http.GetSingleton().delete('/productos/' + id)
    }
};