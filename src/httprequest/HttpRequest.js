import axios from "axios";

class HttpRequests {
    getCitylist() {
        return axios.get("https://api.real-estate-manager.redberryinternship.ge/api/cities");
    }

    getRegionlist() {
        return axios.get("https://api.real-estate-manager.redberryinternship.ge/api/regions");
    }
}

export default new HttpRequests(); // ობიექტად ექსპორტი
