import React from 'react';

var MenuButton = React.createClass({
    render: function() {
        return (
            <li >
                <button onClick={this.props.onButtonClick}>{this.props.text}</button>
            </li>
        );
    }
});

export default MenuButton;