import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    EMPLOYER_CREATE_FAIL,
    EMPLOYER_CREATE_REQUEST,
    EMPLOYER_CREATE_SUCCESS,
    EMPLOYER_LIST_FAIL,
    EMPLOYER_LIST_REQUEST,
    EMPLOYER_LIST_SUCCESS
} from "../constants/adminConstants"
import * as api from "../api";

export const adminLogin = (loginData) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        })
        const { data } = await api.adminLogin(loginData);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
};

export const listEmployer = () => async (dispatch) => {
    try {
        dispatch({
            type: EMPLOYER_LIST_REQUEST
        })
        const { data } = await api.listEmployer();
        dispatch({
            type: EMPLOYER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EMPLOYER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const addEmployer = (employerData) => async (dispatch) => {
    try {
        dispatch({
            type: EMPLOYER_CREATE_REQUEST
        })
        const { data } = await api.addEmployer(employerData);

        dispatch({
            type: EMPLOYER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EMPLOYER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
};