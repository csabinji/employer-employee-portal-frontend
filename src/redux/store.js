import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addEmployerReducer, adminLoginReducer, listEmployerReducer } from './reducers/adminReducer'
import { employeeLoginReducer, fetchEmployeeReducer } from './reducers/employeeReducer'
import { addEmployeeReducer, deleteEmployeeReducer, importEmployeeReducer, listEmployeeReducer, updateEmployeeReducer } from './reducers/employerReducer'

const reducer = combineReducers({

    // Admin
    adminLogin: adminLoginReducer,
    addEmployer: addEmployerReducer,
    listEmployer: listEmployerReducer,

    // Employer
    employerLogin: employeeLoginReducer,
    addEmployee: addEmployeeReducer,
    listEmployee: listEmployeeReducer,
    updateEmployeeByEmployer: updateEmployeeReducer,
    deleteEmployee: deleteEmployeeReducer,
    importEmployee: importEmployeeReducer,

    // Employee
    employeeLogin: employeeLoginReducer,
    fetchEmployee: fetchEmployeeReducer,
    updateEmployee: updateEmployeeReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk];

let store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;