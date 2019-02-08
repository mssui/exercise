import React, { Component } from 'react';
import SearchBar from './search_bar';


const EventTeamItem = ({ team, key, handleClick, isHidden }) => {
	console.log(team);
  
	// var person = {
	// 	height: 50px;
	// 	border: 1px solid darkgrey;
	// }
	return (
	  <div
		className="container"
		style={{ border: "0.5px solid lightgrey", padding: "10px" }}
	  >
		<div className="row align-items-center">
		  <div className="col-md-1 float-left">
			<img
			  src="https://via.placeholder.com/50"
			  style={{ borderRadius: "6px" }}
			  alt="..."
			  class="rounded"
			/>
		  </div>
		  <div className="col-md-10 float-left">
			<div style={{ fontWeight: "bold" }}>
			  {team.name}
			  <br />
			</div>
			<div style={{ fontSize: 13, color: "lightgrey" }}>{team.email}</div>
		  </div>
		  <div className="col-md-1">
			<i className="fa fa-chevron-right" />
			<div className="col-md-1">
			  <i
				onClick={() => handleClick(team.id)}
				className={
				  !isHidden ? "fa fa-chevron-down" : "fa fa-chevron-right"
				}
				aria-hidden="true"
			  />
			</div>
			<div className="container" style={{ backgroundColor: "#F0F0F0" }}>
			  {!isHidden && team.phone}

		 {/* Clear isHidden condition */}
			</div>
		  </div>
		</div>
	  </div>
	);
  };

export default EventTeamItem;
