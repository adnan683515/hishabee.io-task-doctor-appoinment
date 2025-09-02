import axios from "axios";

// Axios instance function
export const AxiosHookInstance = () => {

    const instance = axios.create({
        baseURL: 'https://appointment-manager-node.onrender.com/api/v1',
        headers: {
            "Content-Type": "application/json",
        },
    });
    return instance;
};
