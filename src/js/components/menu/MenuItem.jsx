import React from 'react';
import MenuLink from './MenuLink.jsx';

var MenuItem = React.createClass({
    render: function() {
        return (
            <li >
                <MenuLink url={this.props.url} title={this.props.title}></MenuLink>
            </li>
        );
    }
});

export default MenuItem;