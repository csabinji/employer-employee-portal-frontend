import axios from "axios";

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        Authorization: `Bearer ${userInfo?.data?.accessToken}`
    }
});

//Admin

export const adminLogin = (data) =>
    API.post(`/admin/login`, data);

export const addEmployer = (data) =>
    API.post(`/employer/add`, data);

// Employer

export const employerLogin = (data) =>
    API.post(`/employer/login`, data);

export const addEmployee = (data) =>
    API.post(`/employee/add`, data);

export const listEmployee = () =>
    API.get(`/employee/list`);

export const updateEmployeeByEmployer = (id, data) =>
    API.put(`/employee/update/${id}`, data);

export const deleteEmployee = (id) =>
    API.delete(`/employee/delete/${id}`);

export const importEmployee = (file) =>
    API.put(`/employee/import`, file);

// Employee

export const employeeLogin = (data) =>
    API.post(`/employee/login`, data);

export const fetchEmployee = () =>
    API.get(`/employee/get`);

export const updateEmployee = (data) =>
    API.put(`/employee/update`, data);