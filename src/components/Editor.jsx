var React = require('react');
import { Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Radio } from 'react-bootstrap';

require('./Editor.css');

var Editor = React.createClass({

	getInitialState: function() {
        return {
            description: '',
            sum: '',
            type: '+',
        };
    },
	
    handleItemAdd: function() {
		
		if( !this._validateBeforeAdd()){
			alert('Please, fill Description and Sum');
		}else{
			var currentdate = new Date(); 
			var datetime =  currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
					
			var newItem = {
				type: this.state.type,
				description: this.state.description,
				sum: this.state.sum,
				id: Date.now(),
				date: datetime
			};

			this.props.onItemAdd(newItem);
			
			this.setState({
				description: '',
				sum: '',
				type: '+',
			});
		}	
    },
	
	_validateBeforeAdd: function(){
		var descriptionVal = document.getElementById('description').value;
		var sumVal = document.getElementById('sum').value;
		if(descriptionVal===''||sumVal===''){
			return false;
		}
		
		return true;
	},
	
	handleDescChange: function(event) {
        this.setState({ description: event.target.value });
    },	
	
	handleSumChange: function(event) {
        this.setState({ sum: event.target.value });
    },
	handleTypeChange: function(event) {
        this.setState({ type: event.target.value });
    },
	render: function() {
		return (
			<form>
				<Row className="editor-wrapper">
					<Col xs={12} md={6}>
						<FormGroup
							controlId="description"
						>
							<ControlLabel>Description</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleDescChange}
							/>
							<FormControl.Feedback />
							<HelpBlock>Please enter your income/cost description</HelpBlock>
						</FormGroup>
					</Col>
					<Col xs={12} md={3}>
						<FormGroup
							controlId="sum"
						>
							<ControlLabel>Sum</ControlLabel>
							<FormControl
								type="number"
								placeholder="Enter sum"
								value={this.state.sum}
								onChange={this.handleSumChange}
							/>
							<FormControl.Feedback />
							<HelpBlock>Please enter sum</HelpBlock>
						</FormGroup>
					</Col>
					<Col xs={12} md={6}>
					    <FormGroup>
							<Radio className='type' name="item-type" value="+" onChange={this.handleTypeChange} defaultChecked inline>
							Income
							</Radio>{' '}
							<Radio className='type' name="item-type" value="-" onChange={this.handleTypeChange} inline>
							Cost
							</Radio>{' '}
							<Button onClick={this.handleItemAdd} bsStyle="primary">ADD</Button>
						</FormGroup>
					</Col>
				</Row>
			</form>
		);
	}
});

module.exports = Editor;