import http from "../http-common";

class ProductoDataService {
    getAll() {
        return http.get("/producto");
    }

    get(id) {
        return http.get(`/producto/${id}`);
    }

    create(data) {
        return http.post("/producto", data);
    }

    update(id, data) {
        return http.put(`/producto/${id}`, data);
    }

    delete(id) {
        return http.delete(`/producto/${id}`);
    }
}

export default new ProductoDataService();