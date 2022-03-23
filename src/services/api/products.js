import axios from 'axios';
import endpoint from '@services/api/'

const addProduct = async (body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endpoint.products.postProducts, body, config);
    return response.data;
};
const updateProduct = async (id, body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.put(endpoint.products.putProducts(id), body, config);
    return response.data;
};

const deleteProducs = async (id) => {
    const response = await axios.delete(endpoint.products.deleteProducs(id));
    return response.data;
}
export { addProduct, deleteProducs, updateProduct };