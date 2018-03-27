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


export function getPromo(nomPromo) {
    return function (dispatch) {
        const url = `${apiRoute.linkapp}promos/${nomPromo}`;


        var settings = {
            method: 'GET',
            headers: {
                'Authorization': testTokenProf.access_token,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            mode: 'cors',
        }


        fetch(url, settings)
            .then(function (response) {
                var data = response.json()
                dispatch({type: "GET_PROMO", payload: data})
                return data;
            })
            .then(function (data) {
                for (var i = 0; i < data.promotion.membres.length; i++) {
                    let student = data.promotion.membres[i];
                    dispatch(getProfilePicture(student));
                    dispatch(getStudentInfo(student));
                }
            })
            .catch(function (error) {
                dispatch({type: "GET_PROMO", payload: error})
            })


    }
}

export function toggleCheckbox(checkboxKey) {

    return {
        type: "TOGGLE_CHECKBOX",
        checkboxKey
    };


}

export function changeCommentary(commentaryKey, payload) {
    return {
        type: "CHANGE_COMMENTARY",
        commentaryKey,
        payload
    }
}

export function getProfilePicture(username) {
    return function (dispatch) {
        const url = `${apiRoute.linkapp}pictures/file/${username}`;


        var settings = {
            method: 'GET',
            headers: {
                //'Authorization': testTokenProf.access_token,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            mode: 'cors',
        }


        fetch(url, settings)
            .then(function (response) {
                dispatch({type: "GET_PROFILE_PICTURE_FULFILLED", payload: response, username: username})
            })
            .catch(function (error) {
                dispatch({type: "GET_PROFILE_PICTURE_REJECTED", payload: error})
            })
    }

}

export function getStudentInfo(username) {
    return function (dispatch) {

        const url = `${apiRoute.linkapp}users/userinfos/${username}`;

        var settings = {
            method: 'GET',
            headers: {
                'Authorization': testTokenProf.access_token,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            mode: 'cors',
        }


        fetch(url, settings)
            .then(function (response) {
                dispatch({type: "GET_STUDENT_INFOS", payload: response.json()})
            })
            .catch(function (error) {
                dispatch({type: "GET_STUDENT_INFOS", payload: error})
            })
    }
}

export function saveAttendanceSheet(attendanceSheet, courseId) {

    return function (dispatch) {
        dispatch({type: "SAVE_ATTENDANCE_SHEET"});


        const url = `${apiRoute.sagg}promos/courses/${courseId}`


        var settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': testTokenProf.access_token,
            },
            mode: 'cors',
            body: JSON.stringify(attendanceSheet)
        }

        console.log (attendanceSheet);

        fetch(url, settings)
            .then(function (response) {
                dispatch({type: "SAVE_ATTENDANCE_SHEET", payload: response.json()})
            })
            .catch((err) => {
                dispatch({type: "SAVE_ATTENDANCE_SHEET", payload: err})
            })
    }

}
