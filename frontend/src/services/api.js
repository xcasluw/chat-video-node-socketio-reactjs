import axios from "axios";

const api = axios.create({
  baseURL: "https://softwarestudy-com-br.umbler.net/",
  // baseURL: "http://localhost:3001/",
});

export default api;
