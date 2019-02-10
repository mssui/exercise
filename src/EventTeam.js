import React, { Component } from 'react';
import EventTeamItem from './EventTeamItem';

class EventTeam extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		activeIndex: null
	  };
	}
	render() {
	  const teams = this.props.data.map((team, index) => {
		return (
		  <EventTeamItem
			key={team.id}
			team={team}
			address={team.address.street + ', ' + team.address.suite + ', ' +  team.address.city + ', ' + team.address.zipcode}
			lat={team.address.geo.lat}
			lng={team.address.geo.lng}
			handleClick={() =>
			  this.setState({
				activeIndex: index
			  })
			}
			isHidden={this.state.activeIndex !== index}	
		  />
		);
	  });
		
	  return (
				<ul className="container-fluid list-group" style={{ padding: "0px" }}>
					{teams}
				</ul>
	  );
	}
  }
  
export default EventTeam;
