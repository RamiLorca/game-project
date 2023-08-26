import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUserPreferences = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/preferences/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user preferences');
        console.trace();
    }
};