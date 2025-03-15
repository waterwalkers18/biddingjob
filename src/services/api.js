import axios from "axios";

// Set the base URL for the backend
const api = axios.create({
  baseURL: "http://localhost:5000", // Change this when deploying
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
