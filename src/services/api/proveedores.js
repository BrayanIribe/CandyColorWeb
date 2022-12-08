import http from './http';

export default {
    async fetch() {
        return http.GetSingleton().get('/proveedores');
    },
    async fetchById(id) {
        return http.GetSingleton().get('/proveedores/' + id);
    },
    async create(form) {
        return http.GetSingleton().post('/proveedores', form)
    },
    async update(id, form) {
        return http.GetSingleton().put('/proveedores/' + id, form)
    },
    async delete(id) {
        return http.GetSingleton().delete('/proveedores/' + id)
    }
};