import {
    EMPLOYEE_CREATE_FAIL,
    EMPLOYEE_CREATE_REQUEST,
    EMPLOYEE_CREATE_RESET,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_DELETE_FAIL,
    EMPLOYEE_DELETE_REQUEST,
    EMPLOYEE_DELETE_RESET,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_IMPORT_FAIL,
    EMPLOYEE_IMPORT_REQUEST,
    EMPLOYEE_IMPORT_RESET,
    EMPLOYEE_IMPORT_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_RESET,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYER_LOGIN_FAIL,
    EMPLOYER_LOGIN_REQUEST,
    EMPLOYER_LOGIN_SUCCESS
} from "../constants/employerConstants"

export const employerLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPLOYER_LOGIN_REQUEST:
            return { loading: true }
        case EMPLOYER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case EMPLOYER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
}

export const addEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPLOYEE_CREATE_REQUEST:
            return { loading: true }
        case EMPLOYEE_CREATE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                data: action.payload.data,
                message: action.payload.message
            }
        case EMPLOYEE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case EMPLOYEE_CREATE_RESET:
            return {}
        default:
            return state
    }
};

export const listEmployeeReducer = (state = { employee: [] }, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_REQUEST:
            return { loading: true };

        case EMPLOYEE_LIST_SUCCESS:
            return {
                loading: false,
                employee: action.payload.data,
                message: action.payload.message
            };

        case EMPLOYEE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
                message: action.payload.message
            };

        default:
            return state;
    }
}

export const updateEmployeeReducer = ( state = { employee: [] }, action ) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE_REQUEST:
            return { loading: true };
    
        case EMPLOYEE_UPDATE_SUCCESS:
            return { 
                loading: false, 
                success: true, 
                message: action.payload.message 
            };

        case EMPLOYEE_UPDATE_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                message: action.payload.message 
            }

        case EMPLOYEE_UPDATE_RESET:
            return {};
        
        default:
            return state;
    }
};

export const deleteEmployeeReducer = ( state = { employee: [] }, action ) => {
    switch (action.type) {
        case EMPLOYEE_DELETE_REQUEST:
            return { loading: true };
    
        case EMPLOYEE_DELETE_SUCCESS:
            return { 
                loading: false, 
                success: true, 
                message: action.payload.message 
            };

        case EMPLOYEE_DELETE_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                message: action.payload.message 
            };

        case EMPLOYEE_DELETE_RESET:
            return {};

        default:
            return state;;
    }
};

export const importEmployeeReducer = ( state = { employee: [] }, action ) => {
    switch (action.type) {
        case EMPLOYEE_IMPORT_REQUEST:
            return { loading: true };
    
        case EMPLOYEE_IMPORT_SUCCESS:
            return { 
                loading: false, 
                success: true, 
                employee: action.payload.data, 
                error: action.payload.errors, 
                message: action.payload.message 
            }

        case EMPLOYEE_IMPORT_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                message: action.payload.message 
            };
        
        case EMPLOYEE_IMPORT_RESET:
            return {};
            
        default:
            return state;
    }
}