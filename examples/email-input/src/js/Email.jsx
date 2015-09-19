var React = require('react');
var jq    = require('jqlite').jqlite;
var _     = require('underscore');

var Email = React.createClass({
	displayName: 'Email',
	
	statics: {
		isValidEmail: function(email) {
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(email);
		}
	},
	
	getValue: function () {
		var input = React.findDOMNode(this.refs.input);
		return jq(input).val();
	},
	
	getDefaultProps: function () {
		return {
			id         : false,
			name       : false,
			value      : false,
			placeholder: false,
			onValid    : false
		};
	},
	
	handleChange: function () {
		var input = jq(React.findDOMNode(this.refs.input));
		if(Email.isValidEmail(input.val())) {
			input.removeClass('invalid').addClass('valid');
			if( _.isFunction(this.props.onValid) ) {
				this.props.onValid(this);	
			}
		} else {
			input.removeClass('valid').addClass('invalid');
		}
	},
	
	render: function () {
		var attrs = {
			type: 'email'
		};
		
		var checkDefaultAttrs = [
			'id', 'name', 'placeholder', 'value'
		];
		_.each(checkDefaultAttrs, function(item) {
			if(this.props[item] !== false)
				attrs[item] = this.props[item];
		}.bind(this));
		
		return (
			<input onChange={this.handleChange} ref="input" {...attrs} />
		);
	}
	
});

module.exports = Email;