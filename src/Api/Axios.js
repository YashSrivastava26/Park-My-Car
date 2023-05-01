import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

let Api = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}` },
});

let resetApiHeaders = (token) => {
  if (!token || token === "") {
    axios.defaults.headers.common["Authorization"] = null;
  }
  Api = axios.create({
    baseURL: baseURL,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { Api, resetApiHeaders };
