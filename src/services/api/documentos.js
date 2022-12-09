import http from './http';

export default {
    async getDocumentoFolio(id) {
        return http.GetSingleton().get('/documentos/folio/' + id);
    },
    async create(form) {
        return http.GetSingleton().post('/documentos', form)
    },
    async fetch(tipoDocumento) {
        return http.GetSingleton().get('/documentos/tipo-documento/' + tipoDocumento);
    },
    async delete(id) {
        return http.GetSingleton().delete('/documentos/' + id)
    },
};