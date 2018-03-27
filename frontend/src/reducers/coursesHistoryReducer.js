const defaultState = {
    fetching : true,
    promotions: [],
    selectedCourses : [],
    selectedPromo : {},
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {

        case "GET_COURSES_HISTORY": {
            return {...state, fetching: true}
        }

        case "GET_COURSES_HISTORY_FULFILLED": {
            return {...state, fetching: true, selectedCourses: action.payload.courses, selectedPromo: state.promotions.find(e => e._id === action.meta.promoId)}
        }
        case "GET_COURSES_HISTORY_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "GET_LIST_OF_PROMOS": {
            return {...state, fetching: true}
        }

        case "GET_LIST_OF_PROMOS_FULFILLED": {
            return {...state, fetching: true, promotions: action.payload.promotions}
        }
        case "GET_LIST_OF_PROMOS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "PROMO_CHANGE": {
            console.log("REDUCER")
            console.log(action.promo)
            return {...state, selectedPromo : action.promo}
        }
        default :
            return state;
    }


}