import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "04583f8a38msh7548f61a53ce374p11ee49jsn7a55c8c508d4",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
