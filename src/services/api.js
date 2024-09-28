import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

function fetchUsers() {
  return axios.get("/tweets").then((response) => response.data);
}

const apiUsers = {
  fetchUsers,
};
export default apiUsers;
