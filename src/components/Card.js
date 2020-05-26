import React from 'react';

function Card(props){

    let id;
        if(props.player == 'one'){
            id = 'playerOneCard';
        }else{
            id = 'playerTwoCard';
        }

	return (
		<div className="card">
			

            <p> <b>{props.cardPulledOne}</b> : <b>{props.cardPulledTwo}</b>  </p>
            <button className="playButton"
            onClick={() => props.handleMove()}> Play </button>
		</div>
	)
}

export default Card;