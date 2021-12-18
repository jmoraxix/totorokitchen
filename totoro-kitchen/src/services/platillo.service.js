import http from "../http-common";

class PlatilloDataService {
    getAll() {
        return http.get("/platillo");
    }

    get(id) {
        return http.get(`/platillo/${id}`);
    }

    findByTipo(tipo) {
        return http.get(`/platillo/tipo?tipo=${tipo}`);
    }

    create(data) {
        return http.post("/platillo", data);
    }

    update(id, data) {
        return http.put(`/platillo/${id}`, data);
    }

    delete(id) {
        return http.delete(`/platillo/${id}`);
    }
}

export default new PlatilloDataService();