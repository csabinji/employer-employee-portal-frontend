import {
    EMPLOYEE_FETCH_FAIL,
    EMPLOYEE_FETCH_REQUEST,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_LOGIN_FAIL,
    EMPLOYEE_LOGIN_REQUEST,
    EMPLOYEE_LOGIN_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_RESET,
    EMPLOYEE_UPDATE_SUCCESS
} from "../constants/employeeConstants"

export const employeeLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPLOYEE_LOGIN_REQUEST:
            return { loading: true }
        case EMPLOYEE_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case EMPLOYEE_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
};

export const fetchEmployeeReducer = (state = { employee: [] }, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_REQUEST:
            return { loading: true };

        case EMPLOYEE_FETCH_SUCCESS:
            return { 
                loading: false, 
                employee: action.payload.data,
                message: action.payload.message
            };

        case EMPLOYEE_FETCH_FAIL:
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