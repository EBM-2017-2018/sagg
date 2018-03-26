const defaultState = {
    button: {
        isVisible: true,
    },
    attendanceSheet: {
        isVisible: false,
    },

    courseForm: {
        isVisible: false
    },
    course: {},
    promo: {},
    controleBlocks: {},
    students: [],
    fetching: false,

}


export default function reducer(state = defaultState, action) {
    let username;
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

        case "GET_PROMO": {
            return {...state, fetching: true}
        }

        case "GET_PROMO_FULFILLED": {
            const membres = action.payload.promotion.membres;
            const nbstudents = membres.length;

            let students = [];
            for (let i = 0; i < nbstudents; i++) {
                students.push({
                    username: membres[i],
                    isAttending: false,
                    commentary: "",
                    photo_url: null,
                    nom: '',
                    prenom: '',
                    email: ''
                })
            }
            return {...state, fetched: true, promo: action.payload.promotion, students: students}
        }
        case "GET_PROMO_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "TOGGLE_CHECKBOX" :
            const checkboxKey = action.checkboxKey;

            return {
                ...state,
                students: state.students.map((el, index) => checkboxKey === index ? {
                    ...el,
                    isAttending: !el.isAttending
                } : el)
            }

        case "CHANGE_COMMENTARY":
            const commentaryKey = action.commentaryKey;
            return {
                ...state,
                students: state.students.map((el, index) => commentaryKey === index ? {
                    ...el,
                    commentary: action.payload
                } : el)
            }

        case "GET_PROFILE_PICTURE":
            return {...state, fetching: true}

        case "GET_PROFILE_PICTURE_FULFILLED":
            username = action.username

            return {
                ...state,
                fetching: false,
                students: state.students.map(el => el.username === username ? {
                    ...el,
                    photoExist: action.payload.ok
                } : el)
            }


        case "GET_PROFILE_PICTURE_REJECTED":
            return {...state, fetching: false, error: action.payload}

        case "GET_STUDENT_INFOS":
            return {...state, fetching: true}

        case "GET_STUDENT_INFOS_FULFILLED":

            username = action.payload.username;

            return {
                ...state, fetching: false, students: state.students.map(el => el.username === username ?
                    {
                        ...el, nom: action.payload.nom,
                        prenom: action.payload.prenom,
                        email: action.payload.email
                    } : el)
            }

        case "GET_STUDENT_INFOS_REJECTED":
            return {...state, fetching: false, error: action.payload}

        default :
            return state;

    }

}

