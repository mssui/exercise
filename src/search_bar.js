import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		// const onInputChange = (term) => {
		// 	this.setState({searchTerm: term});
		// }
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps)
	}

	render() {
		return (
			<div className="container">
			

			<div className="form-group has-feedback">
			
				<input type="text" className="form-control"
				value={this.state.term}
							onChange={event => this.onInputChange(event.target.value)}
							placeholder="&#xF002; Find by name"
							style={{borderRadius: '4px', fontFamily:"Arial, FontAwesome"}}
				/>

				

				<span className="form-control-feedback">
				
   				 </span>
			</div>
			</div>

		);
	}

	onInputChange(term) {
		this.setState({term});
	}
}

export default SearchBar;