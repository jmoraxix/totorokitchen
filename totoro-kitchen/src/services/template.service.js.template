import http from "../http-common";

class ConsecutivoService {
    getAll() {
        return http.get("/consecutivo");
    }

    get(id) {
        return http.get(`/consecutivo/${id}`);
    }

    create(data) {
        return http.post("/consecutivo", data);
    }

    update(id, data) {
        return http.put(`/consecutivo/${id}`, data);
    }

    delete(id) {
        return http.delete(`/consecutivo/${id}`);
    }

    incrementar(id) {
      return http.put(`/consecutivo/${id}/incrementar`);
    }

    generarConsecutivo(tipo) {
      return http.get(`/consecutivo/generarConsecutivo?tipo=${tipo}`);
    }
}

export default new ConsecutivoService();