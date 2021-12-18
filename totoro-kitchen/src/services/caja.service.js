import http from "../http-common";

class CajasDataService {
    getAll() {
        return http.get("/caja");
    }

    get(id) {
        return http.get(`/caja/${id}`);
    }

    create(data) {
        return http.post("/caja", data);
    }

    update(id, data) {
        return http.put(`/caja/${id}`, data);
    }

    delete(id) {
        return http.delete(`/caja/${id}`);
    }

    findByRestaurante(id) {
      return http.get(`/caja/restaurante?codigo=${id}`);
    }

    cambiarEstadoCaja(id, estado) {
      return http.post(`/caja/cambiarEstadoCaja?id=${id}&estado=${estado}`);
    }
}

export default new CajasDataService();