export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,

}, action) {

    switch (action.type) {
        case 'TRIGGER_SAVE_FORM': {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        break;
        case 'SET_FORM_DATA': {
            return {
                ...state,
                formData: action.payload
            }
        }
    }

    return state
}
