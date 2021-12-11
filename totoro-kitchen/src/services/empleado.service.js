import http from "../http-common";

class EmpleadosDataService {
    getAll() {
        return http.get("/empleado");
    }

    get(id) {
        return http.get(`/empleado/${id}`);
    }

    create(data) {
        return http.post("/empleado", data);
    }

    update(id, data) {
        return http.put(`/empleado/${id}`, data);
    }

    delete(id) {
        return http.delete(`/empleado/${id}`);
    }
}

export default new EmpleadosDataService();