import http from "../http-common";

class LineaComestibleDataService {
    getAll() {
        return http.get("/lineaComestible");
    }

    get(id) {
        return http.get(`/lineaComestible/${id}`);
    }

    create(data) {
        return http.post("/lineaComestible", data);
    }

    update(id, data) {
        return http.put(`/lineaComestible/${id}`, data);
    }

    delete(id) {
        return http.delete(`/lineaComestible/${id}`);
    }
}

export default new LineaComestibleDataService();