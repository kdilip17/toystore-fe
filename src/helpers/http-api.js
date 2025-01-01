import axios from "axios";

const endpoint = process.env.API_V1 || 'http://localhost:5000';

const httpApi = {
  userLogin: async (input) => {
    return axios.post(`${endpoint}/api/v1/auth/login`, { email: input.email, password: input.password })
  },
};

export default httpApi;
