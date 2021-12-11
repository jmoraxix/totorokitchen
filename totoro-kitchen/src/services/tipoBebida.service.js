import http from "../http-common";

class TipoBebidaDataService {
    getAll() {
        return http.get("/tipoBebida");
    }

    get(id) {
        return http.get(`/tipoBebida/${id}`);
    }

    create(data) {
        return http.post("/tipoBebida", data);
    }

    update(id, data) {
        return http.put(`/tipoBebida/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tipoBebida/${id}`);
    }
}

export default new TipoBebidaDataService();