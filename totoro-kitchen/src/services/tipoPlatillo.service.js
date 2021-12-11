import http from "../http-common";

class TipoPlatilloDataService {
    getAll() {
        return http.get("/tipoPlatillo");
    }

    get(id) {
        return http.get(`/tipoPlatillo/${id}`);
    }

    create(data) {
        return http.post("/tipoPlatillo", data);
    }

    update(id, data) {
        return http.put(`/tipoPlatillo/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tipoPlatillo/${id}`);
    }
}

export default new TipoPlatilloDataService();