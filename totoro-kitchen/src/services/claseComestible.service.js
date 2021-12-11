import http from "../http-common";

class ClaseComestibleDataService {
    getAll() {
        return http.get("/claseComestible");
    }

    get(id) {
        return http.get(`/claseComestible/${id}`);
    }

    create(data) {
        return http.post("/claseComestible", data);
    }

    update(id, data) {
        return http.put(`/claseComestible/${id}`, data);
    }

    delete(id) {
        return http.delete(`/claseComestible/${id}`);
    }
}

export default new ClaseComestibleDataService();