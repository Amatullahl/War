import React from 'react';

function Card(props){

   

	return (
		<div className="card">
			

            <p> <b>{props.cardPulledOne}</b> : <b>{props.cardPulledTwo}</b>  </p>
            <button className="playButton"
            onClick={() => props.handleMove()}> Play </button>
		</div>
	)
}

export default Card;