import http from "../http-common";

class EmpresaService {
    getAll() {
        return http.get("/empresa");
    }

    get(id) {
        return http.get(`/empresa/${id}`);
    }

    create(data) {
        return http.post("/empresa", data);
    }

    update(id, data) {
        return http.put(`/empresa/${id}`, data);
    }

    delete(id) {
        return http.delete(`/empresa/${id}`);
    }
}

export default new EmpresaService();