export function saveForm(formData) {
    console.log(formData)
    return {
        type: 'TRIGGER_SAVE_FORM',
    }
}

export function setFormData(data) {
    return {
        type: 'SET_FORM_DATA',
        payload: data
    }
}

