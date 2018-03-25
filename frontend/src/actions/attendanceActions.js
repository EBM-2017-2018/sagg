import {apiRoute, testTokenProf} from "../config/routes";

export function toggleButton(payload) {
    return {
        type: "TOGGLE_BUTTON",
        payload
    }
}
export function toggleAttendanceSheet(payload) {
    return {
        type: "TOGGLE_ATTENDANCE_SHEET",
        payload
    }
}

export function toggleCourseForm(payload) {
    return {
        type: "TOGGLE_COURSE_FORM",
        payload
    }
}

export function saveAttendanceSheet(attendanceSheet){

    return function (dispatch) {
        dispatch({type: "SAVE_ATTENDANCE_SHEET"});


        const url = `${apiRoute}attendances`


        var settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': testTokenProf.access_token,
            },
            mode: 'cors',
            cache: 'default',
            body: attendanceSheet
        }


        fetch(url, settings)
            .then(function (response) {
                dispatch({type: "SAVE_ATTENDANCE_SHEET", payload: response.json()})
            })
            .catch((err) => {
                dispatch({type: "SAVE_ATTENDANCE_SHEET", payload: err})
            })
    }
}