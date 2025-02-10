import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pexels.com/",
  headers: {
    Authorization: `${process.env.PEXELS_API_KEY}`,
  },
});

export default api;
