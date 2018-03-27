import {combineReducers} from "redux"

import attendance from "./attendanceReducer"
import course from "./courseReducer"
import promos from "./promoReducer"
import login from "./loginReducer"
import coursesHistory from "./coursesHistoryReducer"

export default combineReducers({
    attendance,
    course,
    promos,
    login,
    coursesHistory
})
