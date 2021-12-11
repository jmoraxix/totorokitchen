import http from "../http-common";

class TipoComestibleDataService {
    getAll() {
        return http.get("/tipoComestible");
    }

    get(id) {
        return http.get(`/tipoComestible/${id}`);
    }

    create(data) {
        return http.post("/tipoComestible", data);
    }

    update(id, data) {
        return http.put(`/tipoComestible/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tipoComestible/${id}`);
    }
}

export default new TipoComestibleDataService();