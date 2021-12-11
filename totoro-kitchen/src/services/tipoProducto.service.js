import http from "../http-common";

class TipoProductoDataService {
    getAll() {
        return http.get("/tipoProducto");
    }

    get(id) {
        return http.get(`/tipoProducto/${id}`);
    }

    create(data) {
        return http.post("/tipoProducto", data);
    }

    update(id, data) {
        return http.put(`/tipoProducto/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tipoProducto/${id}`);
    }
}

export default new TipoProductoDataService();