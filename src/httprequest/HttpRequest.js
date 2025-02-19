import apiClient from "@/views/apiClient";

class HttpRequests {
    getCitylist() {
        return apiClient.get("/cities");
    }

    getRegionlist() {
        return apiClient.get("/regions");
    }
    getAgentslist() {
        return apiClient.get("/agents");
    }
    getRealEstates() {
        return apiClient.get("/real-estates");
    }
    getRealEstate(id) {
        return apiClient.get(`/real-estates/${id}`);
    }
    deleterealestate(id) {
        return apiClient.delete(`/real-estates/${id}`);
    }
}

export default new HttpRequests();
