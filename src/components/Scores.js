import React from 'react';

function Scores(props){
	return (
		<div className="scoreboard">
			<h3>Score Board</h3>
			<p className="scores">
				The Player <b>{props.scorePlayerOne}</b> : <b>{props.scorePlayerTwo}</b>   Computer
			</p>
		</div>
	)
}

export default Scores;