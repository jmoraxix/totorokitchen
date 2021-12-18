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

    abrirCaja(id) {
      return http.post(`/caja/abrirCaja/${id}`);
    }

    cerrarCaja(id) {
      return http.post(`/caja/cerrarCaja/${id}`);
    }
}

export default new CajasDataService();