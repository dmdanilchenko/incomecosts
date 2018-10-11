var React = require('react');
var Item = require('./Item.jsx');
import { Row, Col, Table} from 'react-bootstrap';

require('./List.css');

var List = React.createClass({
	render: function() {
		var onItemDelete = this.props.onItemDelete;
		return (
			<Row className="table-wrapper">
				<Col xs={12} md={12}>
					<h3>List here</h3>
					<Table striped bordered condensed hover>
						 <thead>
							<tr>
								<td>Type</td>
								<td>Date</td>
								<td>Description</td>
								<td>Sum</td>
								<td>Actions</td>
							</tr>
						</thead>
						<tbody>
							{
								this.props.items.map(function(item){
									return (
										<Item
											key={item.id}
											type={item.type}
											description={item.description}
											sum={item.sum}
											date={item.date}
											onDelete={onItemDelete.bind(null, item)}
										/>
									);
								})
							}
						</tbody>
					</Table>
				</Col>
			</Row>	
		);
	}
});

module.exports = List;