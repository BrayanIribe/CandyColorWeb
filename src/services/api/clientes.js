import http from './http';

export default {
    async fetch() {
        return http.GetSingleton().get('/clientes');
    },
    async fetchById(id) {
        return http.GetSingleton().get('/clientes/' + id);
    },
    async create(form) {
        return http.GetSingleton().post('/clientes', form)
    },
    async update(id, form) {
        return http.GetSingleton().put('/clientes/' + id, form)
    },
    async delete(id) {
        return http.GetSingleton().delete('/clientes/' + id)
    }
};