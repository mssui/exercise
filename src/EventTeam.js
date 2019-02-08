import React, { Component } from 'react';
import EventTeamItem from './EventTeamItem';

export class EventTeam extends Component {
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
		<ul
		  className="container-fluid list-group"
		  style={{
			paddingRight: "0",
			borderRadius: "10px",
			backgroundColor: "white"
		  }}
		>
		  {teams}
		</ul>
	  );
	}
  }
  
export default EventTeam;
