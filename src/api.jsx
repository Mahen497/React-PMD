import axios from "axios";

const API_BASE = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(API_BASE);
export const addProduct = (product) => axios.post(API_BASE, product);
export const updateProduct = (id, product) => axios.put(`${API_BASE}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_BASE}/${id}`);
