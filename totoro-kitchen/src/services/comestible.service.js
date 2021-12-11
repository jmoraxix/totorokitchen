import http from "../http-common";

class ComestibleDataService {
    getAll() {
        return http.get("/comestible");
    }

    get(id) {
        return http.get(`/comestible/${id}`);
    }

    create(data) {
        return http.post("/comestible", data);
    }

    update(id, data) {
        return http.put(`/comestible/${id}`, data);
    }

    delete(id) {
        return http.delete(`/comestible/${id}`);
    }
}

export default new ComestibleDataService();