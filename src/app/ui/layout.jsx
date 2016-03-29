
import NavBar from './navbar';
import Terminal from './terminal';

import React from 'react';

export default React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <div>
                <NavBar
                    demos={this.props.demos}
                    tutorials={this.props.tutorials}
                    actions={this.props.actions}
                />
                <div id='program'></div>
                <Terminal />
            </div>
        );
    }
});

