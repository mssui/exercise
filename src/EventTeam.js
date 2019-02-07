import React from 'react';
import EventTeamItem from './EventTeamItem';

const EventTeam = (props) => {

	const teams = props.data.map((team) => {
		return (
			<EventTeamItem 
			key={team.id}
			team={team}/>
		);
	})

	return (
	
			<ul className="container-fluid list-group" style={{paddingRight:'0', borderRadius: '10px', backgroundColor:'white'}}>
				{teams}
			</ul>
			
		);
};


export default EventTeam;
