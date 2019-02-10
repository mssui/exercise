import React from 'react';

const EventTeamItem = ({  address, team, key, handleClick, isHidden }) => {
	
	return (
	  <div className="container" style={{  paddingTop: "10px" }}>
			<div className="row align-items-center" style={{ paddingRight: "0", paddingLeft: "0"}}>
				<div className="col-md-1 float-left">
					<img src="https://via.placeholder.com/50" style={{ borderRadius: "6px" }} class="rounded"	/>
				</div>

				<div className="col-md-10 float-left">
					<div style={{ fontWeight: "bold" }}>
						{team.name}
						<br />
					</div>
					<div style={{ fontSize: 13, color: "lightgrey" }}>
						{team.email}
					</div>
				</div>

				<div className="col-md-1">
					<i onClick={() => handleClick(key)} className={
						!isHidden ? "fa fa-chevron-down" : "fa fa-chevron-right"
					}
						aria-hidden="true" />
				</div>
				
				<div className="container" style={{ backgroundColor: "#F0F0F0", marginTop: '15px'}}>
					{
						(!isHidden && team.phone) ?  
						<div className="row"> 
							<ul style={{ listStyleType: 'none', fontSize: 12, color: "silver", paddingRight: "0", padding: '10px', lineHeight: "2em"}}>
								<li> <strong> Address : </strong> { address } </li>
								<li> <strong> Phone Number : </strong> { team.phone } </li>
							</ul>
						</div>
					: null
					}
				</div>
			</div>
	  </div>
	);
  };

export default EventTeamItem;
