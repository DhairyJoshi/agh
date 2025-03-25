import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.farmerconnects.com/api' });

export const all_product_list = () => API.post('/all_product_list/');