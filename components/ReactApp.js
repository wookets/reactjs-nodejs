/** @jsx React.DOM */

var React = require('react/addons');

var ReactApp = React.createClass({

    componentDidMount: function () {
        console.log(fakeData);

    },
    render: function () {
        return (
            <div id="table-area">
                Meow
            </div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;