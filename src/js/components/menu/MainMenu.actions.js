export function fetchMenu() {
    return {
        type: "FETCH_MENU_FULFILLED",
        payload: [
            {id: 0, title: "Menu1", url: "#link1"},
            {id: 1, title: "Menu2", url: "#link2"}
        ]
    }
}

export function addMenuItem() {
    return {
        type: 'MANUAL_ADD_ITEM'
    }
}

export function removeMenuItem() {
    return {
        type: 'MANUAL_REMOVE_ITEM'
    }
}

export function saveForm() {
    return {
        type: 'TRIGGER_SAVE_FORM'
    }
}