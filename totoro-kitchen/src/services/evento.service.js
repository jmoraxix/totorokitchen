import http from "../http-common";

class EventoDataService {
    getAll() {
        return http.get("/evento");
    }

    get(id) {
        return http.get(`/evento/${id}`);
    }

    create(data) {
        return http.post("/evento", data);
    }

    update(id, data) {
        return http.put(`/evento/${id}`, data);
    }

    delete(id) {
        return http.delete(`/evento/${id}`);
    }
}

export default new EventoDataService();