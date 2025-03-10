import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/v0',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRequest = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.get<T>(url);
        return response;
    } catch (error) {
        throw error;
    }
};

export const postRequest = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.post<T>(url, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const putRequest = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.put<T>(url, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteRequest = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        const response = await apiClient.delete<T>(url);
        return response;
    } catch (error) {
        throw error;
    }
};