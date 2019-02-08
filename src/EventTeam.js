import React from 'react';
import EventTeamItem from './EventTeamItem';

const EventTeam = props => {
	const teams = props.data.map((team, index) => {
	  return (
		<EventTeamItem
		  key={team.id}
		  team={team}
		  handleClick={() =>
			this.props
			  .setState({
				activeIndex: index
			  })
			  .handleClick.bind(this)
		  }
		  isHidden={props.activeIndex !== index}
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
  };

export default EventTeam;
