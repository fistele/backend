import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3001/api";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("CC_Token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export const urlimage="http://localhost:3001/images/"
export default axios;
