var React = require('react');
var HelloWorld = require('./HelloWorld');

React.render(
	React.createElement(HelloWorld, null),
	document.getElementById('wrapper')
);
