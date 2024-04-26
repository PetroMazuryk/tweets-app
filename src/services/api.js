import axios from "axios";

function fetchUsers() {
  return axios
    .get(`https://642f4410b289b1dec4b00ecd.mockapi.io/api/v1/contacts`)
    .then((response) => response.data);
}

const apiUsers = {
  fetchUsers,
};
export default apiUsers;
