import React from 'react';
import classNames from "classnames"
require("./Modal.scss");

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showCloseButton: true
        }
    }

    handleOverlayClick() {
        console.log('handle click!')
    }

    onClose() {
        this.setState({
            showModal: false
        })
    }

    onOpen() {
        this.setState({
            showModal: true
        })
    }

    handleOverlayClick() {
        this.onClose()
    }


    render() {
        //define modal trigger button
        const modalTrigger = <a href="#" className="modal-trigger" onClick={this.onOpen.bind(this)}>{this.props.triggerText}</a>
        var renderModalTrigger = this.props.triggerText ? modalTrigger : undefined

        //define modal header
        const modalHeader = <div className="modal-header">{this.props.headerText}</div>
        var renderModalHeader = this.props.headerText ? modalHeader : undefined

        //define modal close button
        const modalCloseButton = <div onClick={this.onClose.bind(this)} className="modal-close">X</div>
        var renderModalCloseButton = this.props.showCloseButton ? modalCloseButton : undefined

        const modalBodyClasses = classNames(this.props.className, {
            'modal-body': true,
            'hide': !this.state.showModal
        })

        const modalWrapperClasses = classNames({
            'comp-modal-wrapper': true,
            'show': this.state.showModal
        })

        const modalOverlayClasses = classNames({
            'modal-overlay': true,
            'show': this.state.showModal
        })

        return (
            <div>
                {renderModalTrigger}
                <div className={modalWrapperClasses}>
                    <div className={modalOverlayClasses} onClick={this.handleOverlayClick.bind(this)}></div>
                    <div className={modalBodyClasses} id={this.props.id}>
                        {renderModalCloseButton}
                        {renderModalHeader}
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }
}

Modal.propTypes = {
    headerText:         React.PropTypes.string, //copy that shows as modal header
    showCloseButton:    React.PropTypes.bool, //toggle close button, if needed
    triggerText:        React.PropTypes.string, //copy that triggers modal open
    className:          React.PropTypes.string, //CSS class for modal body
    id:                 React.PropTypes.string.isRequired //UNIQUE application id for modal
}

Modal.defaultProps = {
    showCloseButton:    true
}
export default Modal;