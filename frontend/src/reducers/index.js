import {combineReducers} from "redux"

import attendance from "./attendanceReducer"
import course from "./courseReducer"
import promos from "./promoReducer"
import login from "./login"

export default combineReducers({
    attendance,
    course,
    promos,
    login
})
