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
    
}

export default new HttpRequests();
