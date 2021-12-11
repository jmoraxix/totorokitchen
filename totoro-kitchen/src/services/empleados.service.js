import http from "../http-common";

class EmpleadosDataService {
    getAll() {
        return http.get("/empleados");
    }

    get(id) {
        return http.get(`/empleados/${id}`);
    }

    create(data) {
        return http.post("/empleados", data);
    }

    update(id, data) {
        return http.put(`/empleados/${id}`, data);
    }

    delete(id) {
        return http.delete(`/empleados/${id}`);
    }
}

export default new EmpleadosDataService();