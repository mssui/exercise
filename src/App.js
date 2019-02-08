import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';
import EventTeamItem from './EventTeamItem';
import SearchBar from './search_bar';
import SearchInput, {createFilter} from 'react-search-input';

export class App extends Component {
	getData() {
	  const url = "http://jsonplaceholder.typicode.com/users";
	  $.get(url, data => {
		this.setState({
		  infoData: data
		});
	  });
	}
  
	constructor(props) {
	  super(props);
  

		this.state = {
			infoData: [],
			searchTerm: "",
			isHidden: 1
		  };
	  
		  this.getData();
		}
		// updateTerm(newTerm) {
		// 	this.setState({searchTerm: newTerm});
		// 	console.log('new', this.state.searchTerm);
		// }
	  
		// <EventTeam data={this.state.infoData}/>
		handleClick(index) {
			this.setState({ isHidden: index });
		  }
		render() {
		  var containerStyle = {
			marginLeft: "0",
			marginRight: "0",
			backgroundColor: "blueviolet"
		  };
	  
		  var h3Style = {
			color: "white",
			height: "80",
			fontSize: "25",
			textAlign: "left",
			marginLeft: "10",
			paddingTop: "25",
			marginBottom: "0"
		  };
	  
		  return (
			<div className="App" style={{ backgroundColor: "#F0F0F0" }}>
			  <div style={containerStyle}>
				<h3 style={h3Style}>Team Members</h3>
				<div className="container">
				  <div className="row">
					<div className=" col-lg-offset-2 col-lg-10" />
				  </div>
				</div>
			  </div>
			  <div className="d-flex flex-row" style={{ paddingRight: "0" }}>
				<div className="col-md-6">
				  <SearchBar data={this.state.infoData} />
				</div>
				<div className="col-md-6">{this.state.infoData.length} People </div>
			  </div>
			  <div className="container-fluid list-group" style={{paddingRight:'0'}}>
    			<SearchBar data={this.state.infoData} />
    		</div>
    		
    
		<EventTeam data={this.state.infoData}/>
		
			</div>
		  );
		}
	  }
	  