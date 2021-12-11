import http from "../http-common";

class ClientesDataService {
    getAll() {
        return http.get("/cliente");
    }

    get(id) {
        return http.get(`/cliente/${id}`);
    }

    create(data) {
        return http.post("/cliente", data);
    }

    update(id, data) {
        return http.put(`/cliente/${id}`, data);
    }

    delete(id) {
        return http.delete(`/cliente/${id}`);
    }
}

export default new ClientesDataService();