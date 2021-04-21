import axios from 'axios';

const baseURL = 'https://caloriesapi.herokuapp.com';

const axiosHelper = async (method, path, data) => {
  const response = axios[method](`${baseURL}${path}`, data);
  return response;
};

export default axiosHelper;
