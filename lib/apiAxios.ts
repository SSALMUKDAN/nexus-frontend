import axios from "axios";

interface Token {
  access_token: string;
  refresh_token: string;
  exp: number;
  iat: number;
}

const api = axios.create({
  withCredentials: true,
});

const tokenCache = {};

const getToken = () => {
  if (typeof window !== "undefined") {
    const token: Token = JSON.parse(localStorage.getItem("token") ?? "{}");
    return localStorage.getItem("token");
  }
  return null;
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
