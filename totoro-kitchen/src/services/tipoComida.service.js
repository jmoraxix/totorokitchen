import http from "../http-common";

class TipoComidaDataService {
    getAll() {
        return http.get("/tipoComida");
    }

    get(id) {
        return http.get(`/tipoComida/${id}`);
    }

    create(data) {
        return http.post("/tipoComida", data);
    }

    update(id, data) {
        return http.put(`/tipoComida/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tipoComida/${id}`);
    }
}

export default new TipoComidaDataService();