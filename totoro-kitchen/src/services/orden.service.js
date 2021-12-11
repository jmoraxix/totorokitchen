import http from "../http-common";

class OrdenDataService {
    getAll() {
        return http.get("/orden");
    }

    get(id) {
        return http.get(`/orden/${id}`);
    }

    create(data) {
        return http.post("/orden", data);
    }

    update(id, data) {
        return http.put(`/orden/${id}`, data);
    }

    delete(id) {
        return http.delete(`/orden/${id}`);
    }
}

export default new OrdenDataService();