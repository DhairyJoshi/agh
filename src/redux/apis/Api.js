import axios from "axios";

export const IMAGE = "https://api.osmagrimart.com/"
const API = axios.create({ baseURL: 'https://api.osmagrimart.com/api' });
// export const IMAGE = "http://122.170.109.73:7625/"
// const API = axios.create({ baseURL: 'http://122.170.109.73:7625/api' });


export const all_product_list = (formData) => API.post('/user_all_product_list/', formData);
export const all_category_list = (formData) => API.post('/all_category_list/', formData);
export const all_advertisement_list = (formData) => API.post('/user_all_advertisement_list/', formData);
export const all_last_min_deal_list = (formData) => API.post('/all_last_min_deal_list/', formData);
export const best_selling_product = (formData) => API.post('/best_selling_product/', formData);
export const all_deal_of_the_day_list = (formData) => API.post('/all_deal_of_the_day_list/', formData);
export const add_to_cart = (formData) => API.post('/add_to_cart/', formData);
export const add_to_cart_list = (formData) => API.post('/add_to_cart_list/', formData);
export const all_offers_list = (formData) => API.post('/all_offers_list/', formData);
export const count_visitors = (formData) => API.post('/count_visitors/', formData);
export const product_details_web = (formData) => API.post(`/product_details_web/${formData?.slug}/`, formData);

// filter
export const product_filter = (formData) => API.post(`/product_filter/`, formData);
export const search_product = (formData) => API.post(`/product_search/`, formData);


// Auth action

export const web_otp_send = (formData) => API.post('/web_otp_send/', formData);
export const web_otp_verify = (formData) => API.post('/web_otp_verify/', formData);
export const user_details_update = (formData) => API.post('/user_details_update/', formData);
export const social_login = (formData) => API.post('/social_login/', formData);

// checkout
export const user_address_list = (formData) => API.post('/user_address_list/', formData);
export const address_create = (formData) => API.post('/address_create/', formData);
export const address_update = (formData) => API.post('/address_update/', formData);
export const address_delete = (formData) => API.post('/address_delete/', formData);
export const all_promocode_list = (formData) => API.post('/all_promocode_list_mobile_web/', formData);

// Order apis
export const order_confirm = (formData) => API.post('/order_confirm/', formData);
export const my_order_list = (formData) => API.post('/my_order_list/', formData);
export const get_shipping_price = (formData) => API.post('/get_shipping_price/', formData);


//Wishlist
export const wishlist_update = (formData) => API.post('/wishlist_update/', formData);
export const user_wishlist_list = (formData) => API.post('/user_wishlist_list/', formData);

//Contact us

export const contact_us = (formData) => API.post('/contact_us/', formData);


//Notification
export const get_notifications = (formData) => API.post('/notification_web/', formData);