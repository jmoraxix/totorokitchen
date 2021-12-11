import http from "../http-common";

class MesasDataService {
    getAll() {
        return http.get("/mesas");
    }

    get(id) {
        return http.get(`/mesas/${id}`);
    }

    create(data) {
        return http.post("/mesas", data);
    }

    update(id, data) {
        return http.put(`/mesas/${id}`, data);
    }

    delete(id) {
        return http.delete(`/mesas/${id}`);
    }
}

export default new MesasDataService();