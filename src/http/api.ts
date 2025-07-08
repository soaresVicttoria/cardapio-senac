import axios, { AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/pratos`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status >= 400) {
        const errorMessage = {
          status: status,
          message: data?.message || "Error desconhecido.",
        };
        return Promise.reject(errorMessage);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
