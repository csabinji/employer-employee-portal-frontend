import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    EMPLOYER_CREATE_FAIL,
    EMPLOYER_CREATE_REQUEST,
    EMPLOYER_CREATE_RESET,
    EMPLOYER_CREATE_SUCCESS,
    EMPLOYER_LIST_FAIL,
    EMPLOYER_LIST_REQUEST,
    EMPLOYER_LIST_SUCCESS
} from "../constants/adminConstants";

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, success: action.payload.status }
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
}

export const addEmployerReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPLOYER_CREATE_REQUEST:
            return { loading: true }
        case EMPLOYER_CREATE_SUCCESS:
            return {
                loading: false,
                success: action.payload.status,
                data: action.payload.data,
                message: action.payload.message
            }
        case EMPLOYER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case EMPLOYER_CREATE_RESET:
            return {}
        default:
            return state
    }
};

export const listEmployerReducer = (state = { employer: [] }, action) => {
    switch (action.type) {
        case EMPLOYER_LIST_REQUEST:
            return { loading: true };

        case EMPLOYER_LIST_SUCCESS:
            return {
                loading: false,
                employer: action.payload.data,
                message: action.payload.message
            };

        case EMPLOYER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
                message: action.payload.message
            };

        default:
            return state;
    }
}