import React from 'react';
import { connect } from 'react-redux';

require("./MainMenu.scss");

import MenuItem from './MenuItem.jsx';
import MenuButton from './MenuButton.jsx';
import Form from '../form/Form.container.jsx';
import Modal from '../modal/Modal.container.jsx';

import FormTwo from '../form/FormTwo.container.jsx';
import FormInput from '../form/FormInput.jsx';
import FormSelect from '../form/FormSelect.jsx';

import { fetchMenu, addMenuItem, removeMenuItem } from './MainMenu.actions.js'


@connect((store) => {
    return {
        menu: store.menu
    };
})

class MainMenu extends React.Component {
    componentWillMount() {
        console.log(this.props)


        this.props.dispatch(fetchMenu())
    }

    addItem() {
        this.props.dispatch(addMenuItem())
    }

    removeItem() {
        this.props.dispatch(removeMenuItem());
    }

    submitForm(value) {
        //this.props.dispatch(saveForm(value))
        console.log(this.props)
    }

    render() {

        if (this.props.menu.menuItems) {
            var keys = 0;
            var menuItems = this.props.menu.menuItems.map(function(item) {
                keys++;
                return (
                    <MenuItem key={item.id} title={item.title} url={item.url}></MenuItem>
                );
            });

            return (
                <div>
                    <ul className="menu">
                        {menuItems}
                        <MenuButton text="Add" onButtonClick={this.addItem.bind(this)}></MenuButton>
                        <MenuButton text="Remove" onButtonClick={this.removeItem.bind(this)}></MenuButton>
                    </ul>

                    {/*<h3>Form Type 1</h3>*/}
                    {/*<Form*/}
                        {/*menuItems={this.props.menu.menuItems}*/}
                        {/*menuForm={this.props.menu.menuForm}*/}
                        {/*onHandleFormSubmit={this.handleSubmit.bind(this)}*/}
                    {/*></Form>*/}

                    <h3>Form Type 2</h3>
                    <FormTwo
                        className="test-form-class"
                        submitForm={this.submitForm.bind(this)}
                        genericFormError="There was a problem submitting the form, please try again">
                        <FormSelect
                            name="menuSelect"
                            wrapperClass=""
                            id="itemSelect"
                            label="Select Item"
                            options={this.props.menu.menuItems}
                            selected='1'
                            defaultOptionText="Default option"
                            required={true}/>
                        <FormInput
                            name="email"
                            wrapperclass=""
                            id=""
                            label="Email address"
                            placeholder="mail@mail.com"
                            type="text"
                            defaultValue="mail@mail.com"
                            customErrorMessage="Please enter a valid email address"
                            validation="isEmail"
                            required={true}/>
                        <FormInput
                            name="phone"
                            wrapperclass=""
                            label="Phone"
                            placeholder="+1 (212) 123-45-67"
                            type="tel"
                            value=""
                            customErrorMessage="Please enter a valid phone number"
                            validation="isInt"
                            required={false}/>
                    </FormTwo>

                    <Modal
                        headerText="Picture of the Day!"
                        showCloseButton={true}
                        triggerText="Show test modal"
                        className="test-modal-class"
                        id="testOpenTestModal">
                        <div>
                            <img width="100" src="http://apod.nasa.gov/apod/image/1607/AltiplanoNight_NIK7856Ps.jpg" alt=""/>
                        </div>
                    </Modal>

                    <Modal
                        headerText="2nd Picture of the Day!"
                        showCloseButton={true}
                        triggerText="Show second modal"
                        className="test-modal-class"
                        id="testSecondOpenTestModal">
                        <div>
                            <img width="100" src="http://apod.nasa.gov/apod/image/1607/AltiplanoNight_NIK7856Ps.jpg" alt=""/>
                        </div>
                    </Modal>
                </div>

            )
        } else {
            return <div>TEXT</div>
        }
    }
}

export default MainMenu
