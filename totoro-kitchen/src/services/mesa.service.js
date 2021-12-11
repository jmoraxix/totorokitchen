import http from "../http-common";

class MesasDataService {
    getAll() {
        return http.get("/mesa");
    }

    get(id) {
        return http.get(`/mesa/${id}`);
    }

    create(data) {
        return http.post("/mesa", data);
    }

    update(id, data) {
        return http.put(`/mesa/${id}`, data);
    }

    delete(id) {
        return http.delete(`/mesa/${id}`);
    }

    findByRestaurante(id) {
      return http.get(`/mesa/restaurante?nombre=${id}`);
    }
}

export default new MesasDataService();