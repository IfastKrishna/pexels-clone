import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pexels.com/",
  headers: {
    Authorization: `Z6OvRwIFp0ivGogCdePfz0g1bR9BwlRGluTD4ifSU7EYyhuWcCAh8lDA`,
  },
});

export default api;
