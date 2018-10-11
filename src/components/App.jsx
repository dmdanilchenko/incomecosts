var React = require('react');
var Editor = require('./Editor.jsx');
var List = require('./List.jsx');

/* var Bootstrap = require('react-bootstrap'); */
import { Grid, Row, Col } from 'react-bootstrap';

require('./App.css');

var App = React.createClass({
		getInitialState: function() {
			return {
				items: []
			};
		},

		componentDidMount: function() {
			var localItems = JSON.parse(localStorage.getItem('items'));
			if (localItems) {
				this.setState({ items: localItems });
			}
		},

		componentDidUpdate: function() {
			this._updateLocalStorage();
		},
		
		handleItemAdd: function(newItem) {
			var newItems = this.state.items.slice();
			newItems.unshift(newItem);
			this.setState({ items: newItems });
			console.log(newItems);
		},
		
		handleItemDelete: function(item) {
			var itemId = item.id;
			var newItems = this.state.items.filter(function(item) {
				return item.id !== itemId;
			});
			this.setState({ items: newItems });
		},
		
		render: function() {
			return (
				<div className="app-wrapper">
					<Grid>
						<h1>Incomes and Costs</h1>
						<Editor onItemAdd={this.handleItemAdd} />
						<List items={this.state.items} onItemDelete={this.handleItemDelete} />
					</Grid>
				</div>
			);
		},
		
		_updateLocalStorage: function() {
			var items = JSON.stringify(this.state.items);
			localStorage.setItem('items', items);
		}
	});

module.exports = App;