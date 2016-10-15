export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
    menuForm: {
        selected: 0,
        value: ''
    }
}, action) {

    switch (action.type) {
        // case "FETCH_USER": {
        //     return {...state, fetching: true}
        // }
        // case "FETCH_USER_REJECTED": {
        //     return {...state, fetching: false, error: action.payload}
        // }
        case "FETCH_MENU_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                menuItems: action.payload,
            }
        }

        case 'MANUAL_ADD_ITEM': {
            return Object.assign({}, state, {
                menuItems: [
                    ...state.menuItems,
                    {
                        id: state.menuItems.length,
                        title: 'Menu' + (state.menuItems.length + 1),
                        url: '#link' + (state.menuItems.length + 1)
                    }
                ]
            })

        }

        case 'MANUAL_REMOVE_ITEM': {
            const lastMenuId = state.menuItems.length - 1;
            return { menuItems: state.menuItems.filter(menuItem =>
                menuItem.id !== lastMenuId
            )}

        }

        // case "SET_USER_NAME": {
        //     return {
        //         ...state,
        //         user: {...state.user, name: action.payload},
        //     }
        // }
        // case "SET_USER_AGE": {
        //     return {
        //         ...state,
        //         user: {...state.user, age: action.payload},
        //     }
        // }
    }

    return state
}
