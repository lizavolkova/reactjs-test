import React from 'react';

var MenuLink = React.createClass({
    render: function() {
        return (
            <a href={this.props.url}>{this.props.title}</a>
        );
    }
});

export default MenuLink;