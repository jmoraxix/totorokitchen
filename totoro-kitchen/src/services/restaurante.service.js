import http from "../http-common";

class RestauranteDataService {
    getAll() {
        return http.get("/restaurante");
    }

    getAllActivos() {
        return http.get("/restaurante/activos");
    }

    get(id) {
        return http.get(`/restaurante/${id}`);
    }

    create(data) {
        return http.post("/restaurante", data);
    }

    update(id, data) {
        return http.put(`/restaurante/${id}`, data);
    }

    delete(id) {
        return http.delete(`/restaurante/${id}`);
    }
}

export default new RestauranteDataService();