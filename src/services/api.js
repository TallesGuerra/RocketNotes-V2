import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketnotes-v2.onrender.com"
});

