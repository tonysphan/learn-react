var React = require('react');

var HelloWorld = React.createClass({displayName: "HelloWorld",
	
	render: function(){
		return (
			React.createElement("h1", null, "Hello World!")
		);
	}
	
});

module.exports = HelloWorld;
