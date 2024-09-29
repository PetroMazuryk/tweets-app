import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function fetchUsers() {
  try {
    const response = await apiInstance.get("/tweets");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

const apiUsers = {
  fetchUsers,
};
export default apiUsers;
