import http from "../http-common";

class UnidadMedidaDataService {
    getAll() {
        return http.get("/unidadMedida");
    }

    get(id) {
        return http.get(`/unidadMedida/${id}`);
    }

    create(data) {
        return http.post("/unidadMedida", data);
    }

    update(id, data) {
        return http.put(`/unidadMedida/${id}`, data);
    }

    delete(id) {
        return http.delete(`/unidadMedida/${id}`);
    }
}

export default new UnidadMedidaDataService();