import axios from "axios";
import { setToken } from "../features/account";
import store from "../store";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAccountBalance = async (accountId: number, token: string) => {
  console.log(accountId);
  console.log(token);

  try {
    const response = await axios.get(`${API_BASE_URL}/accounts/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account balance");
    console.trace();
  }
};

export const fetchLoginDetails = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });
    if (response.status === 200) {
      const { token } = response.data;
      store.dispatch(setToken(token));
    } else {
      throw new Error("Failed to log in");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to log in");
  }
};
