import http from "../http-common";

class MarcaService {
    getAll() {
        return http.get("/marca");
    }

    get(id) {
        return http.get(`/marca/${id}`);
    }

    create(data) {
        return http.post("/marca", data);
    }

    update(id, data) {
        return http.put(`/marca/${id}`, data);
    }

    delete(id) {
        return http.delete(`/marca/${id}`);
    }
}

export default new MarcaService();