const defaultState = {
    button: {
        isVisible: true,
    },
    attendanceSheet: {
        isVisible: false
    },

    courseForm: {
        isVisible: false
    },
    fetching: false

}


export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case "TOGGLE_BUTTON" :
            return {...state, button: {...state.button, isVisible: action.payload}}

        case "TOGGLE_ATTENDANCE_SHEET": {
            return {...state, attendanceSheet: {...state.attendanceSheet, isVisible: action.payload}}

        }

        case "TOGGLE_COURSE_FORM": {
            return {...state, courseForm: {...state.courseForm, isVisible: action.payload}}
        }

        case "SAVE_ATTENDANCE_SHEET": {
            return {...state, fetching: true}
        }

        case "SAVE_ATTENDANCE_SHEET_FULFILLED": {
            return {...state, fetching: true, course: action.payload}
        }
        case "SAVE_ATTENDANCE_SHEET_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        default :
            return state;

    }

}

