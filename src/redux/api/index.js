import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.farmerconnects.com/api' });

export const all_product_list = () => API.post('/all_product_list/');

export const agh_product_list_web = () => API.post('/agh_product_list_web/');

export const agh_gallery_list_web = () => API.post('/agh_gallery_list_web/');

export const agh_our_team_list_web = () => API.post('/agh_our_team_list_web/');