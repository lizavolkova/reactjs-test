import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import FormSelect from './FormSelect.jsx';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.menuForm.selected,
            value: this.props.menuForm.value,
            isFormInvalid: true
        }
    }

    onHandleFormSubmit(e) {
        e.preventDefault();
        console.log(this.inputs);
        //this.props.onHandleFormSubmit(e, this);
    }


    onFieldChange(e) {
        const change = {};
        console.log(e.currentTarget);
    }

    /**
     * Generic email validation
     * @param {string} email
     * @returns {boolean}
     */
    validateEmail(email) {
        //regular expression from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regEx.test(email)
    }

    /**
     * Generic phone validation
     * @param {string} phone
     * @returns {boolean}
     */
    validatePhone(phone) {
        //regular expression from http://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript
        var regEx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
        return regEx.test(phone)
    }

    render() {
        return (
            <form onSubmit={this.onHandleFormSubmit.bind(this)}>
                <FormSelect
                    wrapperClass=""
                    id="itemSelect"
                    label="Select Item"
                    options={this.props.menuItems}
                    selected={this.state.selected}
                    onHandleChange={this.onFieldChange.bind(this)}
                    defaultOptionText="Default option"
                    required={true}/>
                <FormInput
                    wrapperclass=""
                    label="Menu text"
                    placeholder="New menu value"
                    type="text"
                    value={this.state.value}
                    required={false}/>
                <FormInput
                    wrapperclass=""
                    id=""
                    label="Email address"
                    placeholder="mail@mail.com"
                    type="text"
                    value={this.state.email}
                    validate={this.validateEmail}
                    customErrorMessage="Please enter a valid email address"
                    required={true}/>
                <FormInput
                    wrapperclass=""
                    label="Phone"
                    placeholder="+1 (212) 123-45-67"
                    type="tel"
                    value={this.state.phone}
                    validate={this.validatePhone}
                    customErrorMessage="Please enter a valid phone number"
                    required={false}/>
                {/*<FormButton type="submit" value="Submit!" disabled={this.state.isFormInvalid}/>*/}
                <FormButton type="submit" value="Submit!" disabled={false}/>
            </form>
        )
    }
}