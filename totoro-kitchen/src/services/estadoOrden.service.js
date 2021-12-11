import http from "../http-common";

class EstadoOrdenDataService {
    getAll() {
        return http.get("/estadoOrden");
    }

    get(id) {
        return http.get(`/estadoOrden/${id}`);
    }

    create(data) {
        return http.post("/estadoOrden", data);
    }

    update(id, data) {
        return http.put(`/estadoOrden/${id}`, data);
    }

    delete(id) {
        return http.delete(`/estadoOrden/${id}`);
    }
}

export default new EstadoOrdenDataService();