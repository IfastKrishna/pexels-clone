import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pexels.com/",
  headers: {
    Authorization: `${process.env.NEXT_PUBLIC_PEXELS_API_KEY}`,
  },
});

export default api;
