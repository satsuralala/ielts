import axios from "axios";

export const SERVICE_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

export const apiClient = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(
      error?.response?.data?.message || "Something went wrong"
    );
  }
);

// export const serviceClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
// });

// export const webClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_WEB_URL,
// });
