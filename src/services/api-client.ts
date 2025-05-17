import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
