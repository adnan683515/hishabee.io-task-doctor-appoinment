import axios from "axios";

// Axios instance function
export const AxiosHookInstance = () => {
  
    const instance = axios.create({
        baseURL: 'https://appointment-manager-node.onrender.com/api/v1',
        headers: {
            "Content-Type": "application/json",
        },
    });

    // // optional: interceptors for request/response
    // instance.interceptors.request.use(
    //     (config) => {
    //         const token = localStorage.getItem("authToken"); // token jodi thake
    //         if (token) {
    //             config.headers.Authorization = `Bearer ${token}`;
    //         }
    //         return config;
    //     },
    //     (error) => Promise.reject(error)
    // );

    // instance.interceptors.response.use(
    //     (response) => response,
    //     (error) => {
    //         // handle global errors
    //         console.error(error.response?.data || error.message);
    //         return Promise.reject(error);
    //     }
    // );

    return instance;
};
