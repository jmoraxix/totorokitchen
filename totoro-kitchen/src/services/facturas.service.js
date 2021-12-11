import http from "../http-common";

class FacturasDataService {
    getAll() {
        return http.get("/facturas");
    }

    get(id) {
        return http.get(`/facturas/${id}`);
    }

    create(data) {
        return http.post("/facturas", data);
    }

    update(id, data) {
        return http.put(`/facturas/${id}`, data);
    }

    delete(id) {
        return http.delete(`/facturas/${id}`);
    }
}

export default new FacturasDataService();