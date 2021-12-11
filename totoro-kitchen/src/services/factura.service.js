import http from "../http-common";

class FacturasDataService {
    getAll() {
        return http.get("/factura");
    }

    get(id) {
        return http.get(`/factura/${id}`);
    }

    create(data) {
        return http.post("/factura", data);
    }

    update(id, data) {
        return http.put(`/factura/${id}`, data);
    }

    delete(id) {
        return http.delete(`/factura/${id}`);
    }
}

export default new FacturasDataService();