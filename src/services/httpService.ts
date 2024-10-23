import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  // maxBodyLength: Infinity,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
