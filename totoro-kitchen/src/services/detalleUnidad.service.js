import http from "../http-common";

class DetalleUnidadDataService {
    getAll() {
        return http.get("/detalleUnidad");
    }

    get(id) {
        return http.get(`/detalleUnidad/${id}`);
    }

    create(data) {
        return http.post("/detalleUnidad", data);
    }

    update(id, data) {
        return http.put(`/detalleUnidad/${id}`, data);
    }

    delete(id) {
        return http.delete(`/detalleUnidad/${id}`);
    }
}

export default new DetalleUnidadDataService();