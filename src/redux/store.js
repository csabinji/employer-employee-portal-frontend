import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { adminLoginReducer } from './reducers/adminReducer'
import { employeeLoginReducer, fetchEmployeeReducer } from './reducers/employeeReducer'
import { addEmployeeReducer, deleteEmployeeReducer, importEmployeeReducer, listEmployeeReducer, updateEmployeeReducer } from './reducers/employerReducer'

const reducer = combineReducers({

    // Admin
    adminLogin: adminLoginReducer,
    addEmployer: addEmployeeReducer,

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
    composeWithDevTools(applyMiddleware(...middleware, socketMiddleware))
)

export default store;