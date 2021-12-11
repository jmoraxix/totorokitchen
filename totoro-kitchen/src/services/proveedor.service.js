import http from "../http-common";

class ProveedorDataService {
    getAll() {
        return http.get("/proveedor");
    }

    get(id) {
        return http.get(`/proveedor/${id}`);
    }

    create(data) {
        return http.post("/proveedor", data);
    }

    update(id, data) {
        return http.put(`/proveedor/${id}`, data);
    }

    delete(id) {
        return http.delete(`/proveedor/${id}`);
    }
}

export default new ProveedorDataService();