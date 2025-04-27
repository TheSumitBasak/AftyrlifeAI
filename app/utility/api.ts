import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "https://aftyr-life-api.vercel.app/api/v0",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async <T>(
  url: string,
  token?: string
): Promise<AxiosResponse<T>> => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await apiClient.get<T>(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async <T>(
  url: string,
  data: any,
  token?: string
): Promise<AxiosResponse<T>> => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await apiClient.post<T>(url, data, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const putRequest = async <T>(
  url: string,
  data: any,
  token?: string
): Promise<AxiosResponse<T>> => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await apiClient.put<T>(url, data, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async <T>(
  url: string,
  token?: string
): Promise<AxiosResponse<T>> => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await apiClient.delete<T>(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};
