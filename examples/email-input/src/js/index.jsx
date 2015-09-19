var React = require('react');
var Email = require('./Email');

var App = React.createClass({
	displayName: 'App',
	
	onEmailValid: function( sender ) {
		console.log('Email valid, the email is', sender.getValue());
	},
	
	render: function () {
		return (
			<Email />
		);
	}
	
});
		
React.render(<App />, document.getElementById('wrapper'));	