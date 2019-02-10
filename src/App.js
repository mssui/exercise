import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';
import SearchBar from './search_bar';

export class App extends Component {
	getData() {
	  const url = "http://jsonplaceholder.typicode.com/users";
	  $.get(url, data => {
		this.setState({
			infoData: data,
			filteredData: data
		});
	  });
	}

	constructor(props) {
	  super(props);
			this.state = {
				infoData: [],
				filteredData: [],
				searchTerm: "",
			};
		
		  this.getData();
		}

		filteredData = () =>{
			let term = this.state.searchTerm;
			let newData = this.state.infoData.filter((item)=>{
				return item.name.toLowerCase().search(
					term.toLowerCase()) !== -1;
			});
				this.setState({filteredData: newData},
					() => console.log(this.state.filteredData)
					);
		}

		
		render() {
		  var containerStyle = {
			marginLeft: "0",
			marginRight: "0",
			backgroundColor: "blueviolet",
			padding: "10px"
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
			<div className="App" style={{ backgroundColor: "#F0F0F0", paddingBottom: "15px"}}>
			  <div style={containerStyle}>
				<h3 style={h3Style}>Team Members</h3>
					<div className="container">
						<div className="row">
							<div className=" col-lg-offset-2 col-lg-10" />
						</div>
					</div>
			  </div>
			  <div className="container" style={{ backgroundColor: "white", borderRadius: "10px",  border: "0.5px solid lightgrey" }}>
					<div className="row" style={{ textAlign:'center', backgroundColor: "#F0F0F0", border: "0.5px solid lightgrey",borderTop: "0px", paddingRight: "0", paddingBottom: "10px" }}>
						<div className="col-md-6" style={{ marginTop: "10px"}}>
								<SearchBar onInputChange={(val) =>
								this.setState({searchTerm: val}, ()=>{this.filteredData()})} />
						</div>

						<div className="col-md-4"></div>

						<div className="col-md-2">
							<p style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px"}}>
								{this.state.infoData.length} People
							</p> 
						</div>
					</div>
					{this.state.infoData !== null && (
							<EventTeam data={this.state.filteredData} />)}
			  </div>
			</div>
		  );
		}
	  }
	  