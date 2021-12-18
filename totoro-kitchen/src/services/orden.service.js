import http from "../http-common";

class OrdenDataService {
    getAll() {
        return http.get("/orden");
    }

    getOrdenByMesa(id) {
        return http.get(`/orden/mesa/${id}`);
    }

    get(id) {
        return http.get(`/orden/${id}`);
    }

    create(data) {
        return http.post("/orden", data);
    }

    update(id, data) {
        return http.put(`/orden/${id}`, data);
    }

    agregarPlatillo(id, data) {
        return http.put(`/orden/agregar/${id}`, data);
    }

    quitarPlatillo(id, platilloId) {
        return http.put(`/orden/quitar/${id}?platillo=${platilloId}`);
    }

    cerrarOrden(id) {
        return http.put(`/orden/cerrar/${id}`);
    }

    delete(id) {
        return http.delete(`/orden/${id}`);
    }
}

export default new OrdenDataService();