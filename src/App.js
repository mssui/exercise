import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';
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
			};
		
		  this.getData();
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
		 
		//   let infoData = this.state.infoData.filter((item)=>{
		// 	return item.name.indexOf(this.state.searchTerm) !== -1;
		//   })
		//   this.setState({infoData: infoData});
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
			  <div className="container" style={{ paddingRight: "0",marginTop: "10px" }}>
			  <div className="row">
				<div className="col-md-6">
				  <SearchBar onInputChange={(val) =>
					this.setState({searchTerm: val})} />
				</div><div className="col-md-4"></div>
				<div className="col-md-2"><p style={{ fontSize: "20px", marginTop: "5px"}}>{this.state.infoData.length} People</p> </div>
				</div>
			  </div>
			  <div className="container-fluid list-group" style={{paddingRight:'0'}}>
			  {this.state.infoData !== null && (
          		<EventTeam data={this.state.infoData} />
				  )}
		
    		</div>
			</div>
		  );
		}
		
	  }
	  