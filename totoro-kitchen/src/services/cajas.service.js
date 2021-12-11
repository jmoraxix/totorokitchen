import http from "../http-common";

class CajasDataService {
    getAll() {
        return http.get("/cajas");
    }

    get(id) {
        return http.get(`/cajas/${id}`);
    }

    create(data) {
        return http.post("/cajas", data);
    }

    update(id, data) {
        return http.put(`/cajas/${id}`, data);
    }

    delete(id) {
        return http.delete(`/cajas/${id}`);
    }
}

export default new CajasDataService();