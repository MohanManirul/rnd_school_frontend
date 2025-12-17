import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://school_backend.test/api/v1",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

apiClient.interceptors.request.use((config) => {
  // We are not using token based authentication in this project
  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
