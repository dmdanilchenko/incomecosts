var React = require('react');
import { Button } from 'react-bootstrap';

require('./Item.css');

var Item = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.type}</td>
				<td>{this.props.date}</td>
				<td>{this.props.description}</td>
				<td>{this.props.sum}</td>
				<td>
					<Button onClick={this.props.onDelete} bsStyle="danger">Remove</Button>
				</td>
			</tr>	
		);
	}
});

module.exports = Item;