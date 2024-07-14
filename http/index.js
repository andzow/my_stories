import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { USE_SERVER } from "~/url";

export const API_URL = USE_SERVER;

const instance = Axios.create({
  withCredentials: true,
  baseURL: API_URL,
  //   cache: {
  //     maxAge: 15 * 60 * 1000, // Кеширование на 15 минут
  //   },
});
const $api = setupCache(instance);

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await Axios.get(`${API_URL}auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Пользователь не авторизован");
      }
    }
    throw error;
  }
);
export default $api;
