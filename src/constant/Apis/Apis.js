import axios from 'axios';

export const loginApi = async (url,body) => {
    try {
        const response = await axios.post(`url`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};